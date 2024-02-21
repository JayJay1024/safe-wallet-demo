"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { connectorsForWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { createConfig, WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora, sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { metaMaskWallet, rainbowWallet, safeWallet, walletConnectWallet } from "@rainbow-me/rainbowkit/wallets";
import { createClient, http } from "viem";

const appName = "Safe{Wallet} Demo";
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID || "";
const queryClient = new QueryClient();

const connectors = connectorsForWallets(
  [{ groupName: "Recommended", wallets: [rainbowWallet, metaMaskWallet, walletConnectWallet, safeWallet] }],
  { appName, projectId }
);
const config = createConfig({
  connectors,
  chains: [mainnet, polygon, optimism, arbitrum, base, zora, sepolia],
  client: ({ chain }) => createClient({ chain, transport: http() }),
});

export default function RainbowProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
