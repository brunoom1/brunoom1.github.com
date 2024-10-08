import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Preloader from "./../components/PreLoader"
import ScrollToTop from "./../components/ScrollToTop"
import Navbar from "./../components/Navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";



const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Preloader load={ false } />
        <div className="App" id={false ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          {children}
        </div>  
      </body>
    </html>
  );
}
