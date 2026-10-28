import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zeon",
  description: "Watch the complete walkthrough video to learn how to set up, sync, and manage orders and inventory with Zeon.",
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
