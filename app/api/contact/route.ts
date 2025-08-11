import { NextRequest, NextResponse } from 'next/server';

// Initialize Resend with error handling
const resendApiKey = process.env.RESEND_API_KEY;

// Only import and initialize Resend if API key is available
let resend: any = null;
let ContactEmailTemplate: any = null;

if (resendApiKey) {
  try {
    const { Resend } = require('resend');
    const template = require('@/components/ContactEmailTemplate');
    ContactEmailTemplate = template.ContactEmailTemplate;
    resend = new Resend(resendApiKey);
  } catch (error) {
    console.error('Failed to initialize Resend:', error);
  }
} else {
  console.warn('RESEND_API_KEY not found - email functionality disabled');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, zipCode, message, serviceType } = body;

    // Check if Resend is properly initialized
    if (!resend || !resendApiKey) {
      console.error('Resend not properly configured - missing API key');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Validate required fields
    if (!name || !phone || !email || !zipCode) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, email, and zipCode are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'J&S Painters Website <noreply@jspainters.com>',
      to: ['ernesto@maktubtechnologies.com'],
      subject: `🎨 New Lead: ${name} - ${serviceType || 'General Inquiry'}`,
      react: ContactEmailTemplate({
        name,
        phone,
        email,
        zipCode,
        message,
        serviceType
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        data 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error },
      { status: 500 }
    );
  }
}