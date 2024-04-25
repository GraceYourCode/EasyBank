import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Bank",
  description: "Online banking was never easier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen overflow-x-clip`}>
        <NavigationBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
