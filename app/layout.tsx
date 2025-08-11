import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J&S Contractor Painters Corporation — Professional Painting Services",
  description: "Professional residential and commercial painting services in Miami. Interior, exterior, and specialty painting with quality craftsmanship and competitive pricing.",
  keywords: "painting contractor, residential painting, commercial painting, interior painting, exterior painting, Miami painters, house painting, cabinet painting",
  authors: [{ name: "J&S Contractor Painters Corporation" }],
  creator: "J&S Contractor Painters Corporation",
  publisher: "J&S Contractor Painters Corporation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jspainters.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "J&S Contractor Painters Corporation — Professional Painting Services",
    description: "Professional residential and commercial painting services in Miami with quality craftsmanship and competitive pricing.",
    url: 'https://jspainters.com',
    siteName: 'J&S Contractor Painters Corporation',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'J&S Contractor Painters Corporation - Professional painting services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "J&S Contractor Painters Corporation — Professional Painting Services",
    description: "Professional residential and commercial painting services in Miami with quality craftsmanship and competitive pricing.",
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "J&S Contractor Painters Corporation",
              "image": "https://jspainters.com/images/logo.png",
              "description": "Professional residential and commercial painting services in Miami with quality craftsmanship and competitive pricing.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Miami, FL",
                "addressLocality": "Miami",
                "addressRegion": "FL",
                "postalCode": "33101",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.7617",
                "longitude": "-80.1918"
              },
              "telephone": "+1-786-298-1846",
              "url": "https://jspainters.com",
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 09:00-16:00"
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127"
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "40.7128",
                  "longitude": "-74.0060"
                },
                "geoRadius": "50000"
              },
              "serviceType": [
                "Residential Painting",
                "Commercial Painting",
                "Interior Painting",
                "Exterior Painting",
                "Cabinet Painting",
                "Pressure Washing"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}