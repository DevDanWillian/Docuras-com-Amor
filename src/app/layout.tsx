import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/header/navbar";
import Header from "./components/header/header";

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
        <Navbar />

        <Header />
        {children}
      </body>
    </html>
  );
}
