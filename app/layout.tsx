import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SiteWrapper from "./components/siteWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthew's Brain!",
  description: "Matthew's Brain: My thoughts and ideas on the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteWrapper>
          {children}
        </SiteWrapper>
      </body>
    </html>
  );
}
