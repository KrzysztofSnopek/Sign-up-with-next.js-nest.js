"use client";

import LoginPage from "./login/page";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1C2E24",
    },
  },
});

export default function Home() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <LoginPage />
      </ThemeProvider>
    </main>
  );
}
