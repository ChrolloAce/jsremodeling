import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venetian Plaster Services | J&S Painters Miami",
  description: "Professional Venetian plaster application in Miami. Elegant decorative wall finishes that add luxury and sophistication. Custom textures and finishes.",
  keywords: ["Venetian plaster Miami", "decorative wall finishes", "luxury wall treatments", "plaster application", "textured walls"]
};

export default function VenetianPlasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
