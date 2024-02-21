"use client";

import Navigation from "@/components/navigation";
import { Container } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function RainbowPage() {
  return (
    <Container fixed>
      <Navigation />
      <ConnectButton />
    </Container>
  );
}
