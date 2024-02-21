import type { Metadata } from "next";
import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import theme from "../theme";
import { CssBaseline } from "@mui/material";
import RainbowProvider from "@/providers/rainbow-provider";

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
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <RainbowProvider>{children}</RainbowProvider>
            </ThemeProvider>
          </StyledEngineProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
