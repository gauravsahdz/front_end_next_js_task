"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LoaderProvider } from "@/context/LoaderProvider";
import React from "react";
import { AlertProvider } from "@/context/AlertProvider";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Online Store</title>
        <meta name="title" content="Online Store" />
        <meta
          name="description"
          content="Shop Clothing, personalizations, regular use, ornaments, ect...."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://online-store-gauravsahdz.vercel.app/"
        />
        <meta property="og:title" content="Online Store" />
        <meta
          property="og:description"
          content="Shop Clothing, personalizations, regular use, ornaments, ect...."
        />
        <meta
          property="og:image"
          content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/OnlineStore/Shop%20what%20you%20need%20before%20it%20gets%20away/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F4148343e-28ad-46af-bd12-4a5b3a4535dd.jpg%3Ftoken%3Dw2GvI2CKmpv4N3xkvx_zIHs771wNr9uSGZtq7jf62PQ%26height%3D800%26width%3D1200%26expires%3D33240006197/og.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://online-store-gauravsahdz.vercel.app/"
        />
        <meta property="twitter:title" content="Online Store" />
        <meta
          property="twitter:description"
          content="Shop Clothing, personalizations, regular use, ornaments, ect...."
        />
        <meta
          property="twitter:image"
          content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/OnlineStore/Shop%20what%20you%20need%20before%20it%20gets%20away/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F4148343e-28ad-46af-bd12-4a5b3a4535dd.jpg%3Ftoken%3Dw2GvI2CKmpv4N3xkvx_zIHs771wNr9uSGZtq7jf62PQ%26height%3D800%26width%3D1200%26expires%3D33240006197/og.png"
        />
      </Head>

      <body>
        <LoaderProvider>
          <AlertProvider>
            <Nav />
            {children}
            <Footer />
          </AlertProvider>
        </LoaderProvider>
      </body>
    </>
  );
}
