import type { ReactNode } from "react";
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";

export const metadata: Metadata = {
  title: "Репутация участников",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-dark">{children}</body>
    </html>
  );
}