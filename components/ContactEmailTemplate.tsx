import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactEmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  zipCode: string;
  message?: string;
  serviceType?: string;
}

export const ContactEmailTemplate: React.FC<ContactEmailTemplateProps> = ({
  name,
  phone,
  email,
  zipCode,
  message,
  serviceType
}) => (
  <Html>
    <Head />
    <Preview>New Lead from J&S Painters Website - {name}</Preview>
    <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f6f9fc' }}>
      <Container style={{ 
        margin: '0 auto', 
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        maxWidth: '600px',
        marginTop: '40px',
        marginBottom: '40px'
      }}>
        
        {/* Header */}
        <Section style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Heading style={{ 
            color: '#2563EB', 
            fontSize: '24px', 
            fontWeight: 'bold',
            margin: '0 0 10px 0'
          }}>
            🎨 New Lead from J&S Painters
          </Heading>
          <Text style={{ color: '#64748B', fontSize: '16px', margin: '0' }}>
            Someone is interested in your painting services!
          </Text>
        </Section>

        <Hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '20px 0' }} />

        {/* Lead Information */}
        <Section>
          <Heading style={{ 
            color: '#1E293B', 
            fontSize: '18px', 
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            📋 Lead Details
          </Heading>

          <div style={{ marginBottom: '15px' }}>
            <Text style={{ 
              color: '#374151', 
              fontSize: '14px', 
              fontWeight: 'bold',
              margin: '0 0 5px 0'
            }}>
              👤 Name:
            </Text>
            <Text style={{ 
              color: '#1F2937', 
              fontSize: '16px',
              margin: '0 0 15px 0'
            }}>
              {name}
            </Text>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <Text style={{ 
              color: '#374151', 
              fontSize: '14px', 
              fontWeight: 'bold',
              margin: '0 0 5px 0'
            }}>
              📧 Email:
            </Text>
            <Link href={`mailto:${email}`} style={{ 
              color: '#2563EB', 
              fontSize: '16px',
              textDecoration: 'none'
            }}>
              {email}
            </Link>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <Text style={{ 
              color: '#374151', 
              fontSize: '14px', 
              fontWeight: 'bold',
              margin: '0 0 5px 0'
            }}>
              📱 Phone:
            </Text>
            <Link href={`tel:${phone}`} style={{ 
              color: '#2563EB', 
              fontSize: '16px',
              textDecoration: 'none'
            }}>
              {phone}
            </Link>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <Text style={{ 
              color: '#374151', 
              fontSize: '14px', 
              fontWeight: 'bold',
              margin: '0 0 5px 0'
            }}>
              📍 ZIP Code:
            </Text>
            <Text style={{ 
              color: '#1F2937', 
              fontSize: '16px',
              margin: '0 0 15px 0'
            }}>
              {zipCode}
            </Text>
          </div>

          {serviceType && (
            <div style={{ marginBottom: '15px' }}>
              <Text style={{ 
                color: '#374151', 
                fontSize: '14px', 
                fontWeight: 'bold',
                margin: '0 0 5px 0'
              }}>
                🎨 Service Interest:
              </Text>
              <Text style={{ 
                color: '#1F2937', 
                fontSize: '16px',
                margin: '0 0 15px 0'
              }}>
                {serviceType}
              </Text>
            </div>
          )}

          {message && (
            <div style={{ marginBottom: '15px' }}>
              <Text style={{ 
                color: '#374151', 
                fontSize: '14px', 
                fontWeight: 'bold',
                margin: '0 0 5px 0'
              }}>
                💬 Message:
              </Text>
              <Text style={{ 
                color: '#1F2937', 
                fontSize: '16px',
                backgroundColor: '#F8FAFC',
                padding: '15px',
                borderRadius: '6px',
                border: '1px solid #E2E8F0',
                margin: '0 0 15px 0'
              }}>
                {message}
              </Text>
            </div>
          )}
        </Section>

        <Hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '30px 0 20px 0' }} />

        {/* Quick Actions */}
        <Section style={{ textAlign: 'center' }}>
          <Heading style={{ 
            color: '#1E293B', 
            fontSize: '16px', 
            fontWeight: 'bold',
            marginBottom: '15px'
          }}>
            🚀 Quick Actions
          </Heading>
          
          <div style={{ marginBottom: '10px' }}>
            <Link 
              href={`tel:${phone}`}
              style={{
                backgroundColor: '#2563EB',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 'bold',
                margin: '0 10px 10px 0',
                display: 'inline-block'
              }}
            >
              📞 Call {name}
            </Link>
            
            <Link 
              href={`mailto:${email}?subject=Re: Your Painting Project Inquiry`}
              style={{
                backgroundColor: '#10B981',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 'bold',
                margin: '0 0 10px 10px',
                display: 'inline-block'
              }}
            >
              ✉️ Email {name}
            </Link>
          </div>
        </Section>

        <Hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '30px 0 20px 0' }} />

        {/* Footer */}
        <Section style={{ textAlign: 'center' }}>
          <Text style={{ 
            color: '#64748B', 
            fontSize: '12px',
            margin: '0'
          }}>
            This lead was generated from your J&S Painters website contact form.
            <br />
            Received on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
          </Text>
        </Section>

      </Container>
    </Body>
  </Html>
);

export default ContactEmailTemplate;