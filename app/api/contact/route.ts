import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Simple HTML email template
function createEmailHTML(data: {
  name: string;
  phone: string;
  email: string;
  zipCode: string;
  message?: string;
  serviceType?: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Lead from J&S Painters Website</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #EA580C; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
          <h1 style="margin: 0; font-size: 24px;">🎨 New Lead from J&S Painters</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone is interested in your painting services!</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #EA580C; margin-top: 0;">📋 Lead Details</h2>
          
          <div style="margin-bottom: 15px;">
            <strong>👤 Name:</strong><br>
            <span style="font-size: 18px;">${data.name}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong>📧 Email:</strong><br>
            <a href="mailto:${data.email}" style="color: #EA580C; text-decoration: none; font-size: 16px;">${data.email}</a>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong>📱 Phone:</strong><br>
            <a href="tel:${data.phone}" style="color: #EA580C; text-decoration: none; font-size: 16px;">${data.phone}</a>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong>📍 ZIP Code:</strong><br>
            <span style="font-size: 16px;">${data.zipCode}</span>
          </div>
          
          ${data.serviceType ? `
          <div style="margin-bottom: 15px;">
            <strong>🎨 Service Interest:</strong><br>
            <span style="font-size: 16px;">${data.serviceType}</span>
          </div>
          ` : ''}
          
          ${data.message ? `
          <div style="margin-bottom: 15px;">
            <strong>💬 Message:</strong><br>
            <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #EA580C; margin-top: 8px;">
              ${data.message}
            </div>
          </div>
          ` : ''}
        </div>
        
        <div style="text-align: center; margin-bottom: 20px;">
          <h3 style="color: #EA580C;">🚀 Quick Actions</h3>
          <a href="tel:${data.phone}" style="background: #EA580C; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 0 10px; display: inline-block; font-weight: bold;">📞 Call ${data.name}</a>
          <a href="mailto:${data.email}?subject=Re: Your Painting Project Inquiry" style="background: #16A34A; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 0 10px; display: inline-block; font-weight: bold;">✉️ Email ${data.name}</a>
        </div>
        
        <div style="text-align: center; color: #666; font-size: 12px; border-top: 1px solid #ddd; padding-top: 20px;">
          This lead was generated from your J&S Painters website contact form.<br>
          Received on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
        </div>
      </body>
    </html>
  `;
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
    
    // Send email using Resend with HTML template
    const { data, error } = await resend.emails.send({
      from: 'J&S Painters Website <onboarding@resend.dev>',
      to: ['ernesto@maktubtechnologies.com'],
      subject: `🎨 New Lead: ${name} - ${serviceType || 'General Inquiry'}`,
      html: createEmailHTML({
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