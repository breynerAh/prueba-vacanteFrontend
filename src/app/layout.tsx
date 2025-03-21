import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen">
          <div className="w-64 bg-[#000e1c] text-white p-4 h-full">
            <div className="mb-4 font-bold text-lg">Menú</div>
            <ul>
              <Link href="/">
                <li className="py-2 hover:bg-gray-700 px-2 rounded">
                  Usuarios
                </li>
              </Link>
              <Link href="/posts">
                <li className="py-2 hover:bg-gray-700 px-2 rounded">
                  Publicaciones
                </li>
              </Link>
            </ul>
          </div>
          <Provider>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
