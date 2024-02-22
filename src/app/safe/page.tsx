import Navigation from "@/components/navigation";
import Transfer from "@/components/transfer";
import { Container } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function SafePage() {
  return (
    <Container
      fixed
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navigation />
      <ConnectButton />
      <Transfer />
    </Container>
  );
}
