import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zeon",
  description: "Get help and find answers to common questions about setting up, syncing, and managing orders and inventory with Zeon.",
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
