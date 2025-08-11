import { NextRequest, NextResponse } from 'next/server';

// Initialize Resend with error handling
const resendApiKey = process.env.RESEND_API_KEY;

// Dynamic imports to prevent build issues
async function initializeResend() {
  if (!resendApiKey) {
    return { resend: null, ContactEmailTemplate: null };
  }

  try {
    const { Resend } = await import('resend');
    const { ContactEmailTemplate } = await import('@/components/ContactEmailTemplate');
    const resend = new Resend(resendApiKey);
    return { resend, ContactEmailTemplate };
  } catch (error) {
    console.error('Failed to initialize Resend:', error);
    return { resend: null, ContactEmailTemplate: null };
  }
}

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

    // Initialize Resend dynamically
    const { resend, ContactEmailTemplate } = await initializeResend();

    // Check if Resend is properly initialized
    if (!resend || !resendApiKey) {
      console.warn('Resend not properly configured - missing API key, but accepting form submission');
      
      // Log the form data for debugging
      console.log('Form submission received (no email sent):', {
        name,
        phone,
        email,
        zipCode,
        serviceType,
        message,
        timestamp: new Date().toISOString()
      });
      
      // Return success even without email
      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully (email service temporarily unavailable)',
          warning: 'Email not sent - please contact directly at (786) 298-1846'
        },
        { status: 200 }
      );
    }

    // Send email using Resend (using onboarding@resend.dev for testing)
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