import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Docuras Com Amor",
  description: "Sua Doceria e Confeitaria Favorita.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Children rendered in layout:", children);

  return (
    <html lang="pt">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
