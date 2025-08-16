import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/components/ContactEmailTemplate';

// Initialize Resend
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, zipCode, message, serviceType } = body;

    // Validate required fields first
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

    // Check if Resend is properly initialized
    if (!resend || !resendApiKey) {
      console.error('❌ Resend API key not found. Please set RESEND_API_KEY environment variable.');
      
      // Log the form data for debugging
      console.log('📋 Form submission received (no email sent):', {
        name,
        phone,
        email,
        zipCode,
        serviceType,
        message,
        timestamp: new Date().toISOString()
      });
      
      return NextResponse.json(
        { 
          error: 'Email service not configured',
          details: 'RESEND_API_KEY environment variable is missing'
        },
        { status: 500 }
      );
    }

    console.log('🚀 Sending email via Resend...');
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'J&S Painters Website <onboarding@resend.dev>',
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
      console.error('❌ Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    console.log('✅ Email sent successfully:', data);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully! We will contact you soon.',
        data 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ API route error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}