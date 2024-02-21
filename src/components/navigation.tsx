import { Stack } from "@mui/material";
import Link from "next/link";

export default function Navigation() {
  return (
    <Stack direction="row" spacing={2}>
      <Link href="/">Home</Link>
      <Link href="/mui">Mui</Link>
      <Link href="/rainbow">Rainbow</Link>
    </Stack>
  );
}
