import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lime Base Wash Services | J&S Painters Miami",
  description: "Professional lime base wash application in Miami. Natural lime-based wall treatments with antimicrobial properties and eco-friendly finishes.",
  keywords: ["lime wash Miami", "lime base wash", "natural wall finishes", "eco-friendly paint", "antimicrobial walls", "breathable wall finish"]
};

export default function LimeBaseWashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
