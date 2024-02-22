import { LoadingButton } from "@mui/lab";

interface Props {
  loading: boolean;
}

export default function SendButton({ loading }: Props) {
  return (
    <LoadingButton sx={{ width: "45ch", paddingY: 1.5 }} variant="contained" type="submit" loading={loading}>
      <span>Send</span>
    </LoadingButton>
  );
}
