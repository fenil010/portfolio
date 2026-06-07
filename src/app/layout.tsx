import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fenil Patel — Frontend Developer & UI Engineer",
  description:
    "Portfolio of Fenil Patel — a Frontend Developer specializing in building modern, responsive, and user-friendly web applications with React.js, Next.js, and Tailwind CSS.",
};

export default function RootLayout({
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
