import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Juliet Justin — Architectural Designer", description: "Architectural portfolio of Juliet Justin — Selected Works 2019–2026" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" /></head><body>{children}</body></html>);
}
