import type { Metadata } from "next";
import { Commissioner } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StoreProvider from "./StoreProvider";

const inter = Commissioner({ subsets: [] });

export const metadata: Metadata = {
  title: "Movie Pick",
  description: "Website for Movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[var(--blue-medium)]`}>
        <Navbar/>
      <StoreProvider>
      {children}
      
      </StoreProvider>
       
        
        <Footer/>
        </body>
    </html>
  );
}
