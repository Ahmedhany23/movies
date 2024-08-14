import type { Metadata } from "next";
import { Commissioner } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import StoreProvider from "./StoreProvider";
import QueryClientProviderComponent from "./components/QueryClientProvider";
import {SuspenseWithDelay} from "@/app/components/useLoadingWithDelay"
import {CurrentPageProvider} from "@/app/context/useCurrentPage"
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
      <body className={`${inter.className} bg-[var(--blue-medium)] relative min-h-screen`}>
        <StoreProvider>
          <Navbar />
          <CurrentPageProvider>
          <QueryClientProviderComponent>
          <SuspenseWithDelay delay={1500}>
            {children}
          </SuspenseWithDelay>
          </QueryClientProviderComponent>
          </CurrentPageProvider>
    
        
        </StoreProvider>
      </body>
    </html>
  );
}