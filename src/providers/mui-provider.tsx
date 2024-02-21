import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { PropsWithChildren } from "react";
import { CssBaseline } from "@mui/material";
import theme from "@/theme";

export default function MuiProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <AppRouterCacheProvider options={{ key: "css", enableCssLayer: true }}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </AppRouterCacheProvider>
  );
}
