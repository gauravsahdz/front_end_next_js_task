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
