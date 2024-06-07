import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Libre_Franklin } from "next/font/google";
import { Chivo } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootProviders from "../components/providers/RootProviders";
import { Toaster } from "../components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
});
const chivo = Chivo({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Track Rupee - Your favorite Budget Tracker",
  description:
    "A Budget Tracker app that lets you manage your expenses and income!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
        <body className={libre_franklin.className + " " + chivo.className}>
          <Toaster richColors position="bottom-right" />
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
