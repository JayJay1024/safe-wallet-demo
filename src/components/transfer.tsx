"use client";

import { Box } from "@mui/material";
import AmountInput from "./amount-input";
import RecipientInput from "./recipient-input";
import SendButton from "./send-button";
import { useCallback, useState } from "react";
import { useSendTransaction } from "wagmi";
import { isAddress, parseEther } from "viem";

export default function Transfer() {
  const { sendTransaction } = useSendTransaction();
  const [busy, setBusy] = useState(false);

  const handleSend = useCallback(
    (formData: FormData) => {
      const amount = formData.get("amount")?.toString() ?? "";
      const recipient = formData.get("recipient")?.toString() ?? "";

      if (amount && !Number.isNaN(Number(amount)) && isAddress(recipient)) {
        setBusy(true);
        sendTransaction(
          { to: recipient, value: parseEther(amount) },
          {
            onSuccess: (data) => {
              setBusy(false);
            },
            onError: (err) => {
              setBusy(false);
            },
          }
        );
      }
    },
    [sendTransaction]
  );

  return (
    <Box padding={3} borderRadius={2} boxShadow={3}>
      <Box
        component="form"
        autoComplete="off"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2.5}
        width="fit-content"
        action={handleSend}
        noValidate
      >
        <AmountInput />
        <RecipientInput />
        <SendButton loading={busy} />
      </Box>
    </Box>
  );
}
