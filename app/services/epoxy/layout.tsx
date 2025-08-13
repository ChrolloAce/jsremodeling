import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Epoxy Coating Services | J&S Painters Miami",
  description: "Professional epoxy floor coating services in Miami. Durable, chemical-resistant coatings for garages, basements, and commercial spaces. Free estimates.",
  keywords: ["epoxy coating Miami", "garage floor coating", "epoxy flooring", "industrial flooring", "floor coating services"]
};

export default function EpoxyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
