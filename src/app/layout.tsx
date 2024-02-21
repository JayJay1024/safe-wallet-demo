import type { Metadata } from "next";
import "./globals.css";

import RainbowProvider from "@/providers/rainbow-provider";
import MuiProvider from "@/providers/mui-provider";

export const metadata: Metadata = {
  title: "Safe{Wallet} Demo",
  description: "Safe Wallet demo",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MuiProvider>
          <RainbowProvider>{children}</RainbowProvider>
        </MuiProvider>
      </body>
    </html>
  );
}
