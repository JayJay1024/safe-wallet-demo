import { FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";

export default function AmountInput() {
  return (
    <FormControl sx={{ width: "45ch" }} variant="outlined">
      <InputLabel htmlFor="amount-input">Amount</InputLabel>
      <OutlinedInput
        id="amount-input"
        name="amount"
        endAdornment={<InputAdornment position="end">ETH</InputAdornment>}
        label="Amount"
      />
    </FormControl>
  );
}
