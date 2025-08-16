import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Projects | J&S Contractor Painters Corporation",
  description: "Browse our portfolio of luxury residential and commercial painting projects in Miami. See our professional craftsmanship and attention to detail.",
  keywords: "painting projects, Miami painters portfolio, luxury home painting, residential painting gallery, commercial painting projects",
  openGraph: {
    title: "Our Projects | J&S Contractor Painters Corporation",
    description: "Browse our portfolio of luxury residential and commercial painting projects in Miami.",
    images: [
      {
        url: '/images/hero-luxury-home.jpg',
        width: 1200,
        height: 630,
        alt: 'J&S Painters luxury home projects',
      },
    ],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
