"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora, sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const config = getDefaultConfig({
  appName: "Safe{Wallet} Demo",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID || "",
  chains: [mainnet, polygon, optimism, arbitrum, base, zora, sepolia],
  // ssr: true,
});
const queryClient = new QueryClient();

export default function RainbowProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
