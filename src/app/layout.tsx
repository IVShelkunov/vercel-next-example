import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/layuot/header";
const jetbrains = localFont({
  src: './fonts/JetBrainsMono.ttf',
  variable: '--font-jetbrains',
  weight: '100 800',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Drive Drift Dose",
  description: "Bike workshop 3.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body
        className="antialiased min-h-screen w-full bg-black text-white  " 
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
