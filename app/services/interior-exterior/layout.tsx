import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior & Exterior Painting Services | J&S Painters Miami",
  description: "Professional interior and exterior painting services in Miami. Premium paints, expert application, and weather-resistant coatings. Free estimates.",
  keywords: ["interior painting Miami", "exterior painting Miami", "house painting", "residential painting", "commercial painting"]
};

export default function InteriorExteriorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
