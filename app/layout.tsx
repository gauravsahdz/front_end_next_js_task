import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from "next/head";
import AuthProvider from "@/context/AuthProvider";
import LoaderProvider from "@/context/LoaderProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider session={null}>
          <LoaderProvider>
            <Nav />
            {children}
            <Footer />
          </LoaderProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
