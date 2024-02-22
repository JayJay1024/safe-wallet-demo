import { AccountCircle } from "@mui/icons-material";
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";

export default function RecipientInput() {
  return (
    <FormControl sx={{ width: "45ch" }} variant="outlined" required>
      <InputLabel htmlFor="recipient-input">Recipient</InputLabel>
      <OutlinedInput
        id="recipient-input"
        name="recipient"
        endAdornment={
          <InputAdornment position="end">
            <AccountCircle />
          </InputAdornment>
        }
        label="Recipient"
      />
    </FormControl>
  );
}
