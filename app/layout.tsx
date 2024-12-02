import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google"

const lato = Lato({
  display: "swap",
  weight: ["300", "400", "700", "900"],
  subsets: ['latin'],
  fallback: ["sans"],
  variable: "--font-lato"
})

export const metadata: Metadata = {
  title: "Aakash Khanal",
  description: "Protfolio for Aakash Khanal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
