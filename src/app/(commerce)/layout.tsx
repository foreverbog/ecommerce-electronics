import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: "eCommerce",
  description: "Generated by eCommerce",
};

export default function CommerceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
