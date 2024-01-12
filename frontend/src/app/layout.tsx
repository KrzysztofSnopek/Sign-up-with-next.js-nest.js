import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "500"],
  display: "swap",
});

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-robotoSlab",
  weight: ["100", "300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recruitment task",
  description: "Login page created with Next.js and Nest.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${roboto.variable} ${roboto_slab.variable}`}>
          {children}
        </body>
      </Provider>
    </html>
  );
}
