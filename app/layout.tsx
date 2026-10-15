import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css'
import { LayoutProps } from "next/dist/lib/metadata/metadata-resolution-primitives";


export const metadata:Metadata = {
	title: "Репутация участников"
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="bg-dark">{children}</body>
    </html>
  );
}
