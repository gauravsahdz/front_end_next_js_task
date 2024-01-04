import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import React from "react";
import Head from "next/head";
import { LoaderProvider } from "@/context/LoaderProvider";
import { AlertProvider } from "@/context/AlertProvider";

export const metadata = {
  metadataBase: new URL("https://online-store-gauravsahdz.vercel.app"),
  title: {
    default: "OnlineStore",
    template: `%s | OnlineStore`,
  },
  description:
    "Shop Clothing, personalizations, regular use, ornaments, etc. Free Shipping on All Orders & 7 Day Money Back Guarantee. Receive 30% Off Your First Purchase.",
  keywords: [
    "OnlineStore",
    "OnlineStore.com",
    "OnlineStore.com",
    "OnlineStore.com",
    "OnlineStore.com",
    "Products",
    "Categories",
    "Discounts",
    "Offers",
    "Deals",
    "Clothing",
    "Personalizations",
    "Ornaments",
    "Regular Use",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OnlineStore",
    type: "website",
    locale: "en_IN",
    url: "/",
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LoaderProvider>
          <AlertProvider>
            <Nav />
            {children}
            <Footer />
          </AlertProvider>
        </LoaderProvider>
      </body>
    </html>
  );
}
