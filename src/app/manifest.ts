import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Safe{Wallet} Demo",
    description: "Safe Wallet demo",
    start_url: "/safe-wallet-demo",
    // iconPath: "safe-wallet-demo/vercel.svg",
  };
}
