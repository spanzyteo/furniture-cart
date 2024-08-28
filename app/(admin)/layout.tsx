import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "../globals.css";

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Furniture App | Admin",
  description: "The admin panel for managing furniture backend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
