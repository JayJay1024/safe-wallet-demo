"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const bodyElement = document.getElementsByTagName("body")[0];

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: bodyElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: bodyElement,
      },
    },
    MuiDialog: {
      defaultProps: {
        container: bodyElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: bodyElement,
      },
    },
  },
});

export default theme;
