import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/navbar";
import ContactNavBar from "./components/ContactNavBar";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Docuras Com Amor",
  description: "Sua Doceria e Confeitaria Favorita.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ContactNavBar />
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
