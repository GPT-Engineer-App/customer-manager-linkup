import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    600: "#3182ce",
    500: "#4299e1",
    400: "#63b3ed",
    300: "#90cdf4",
    200: "#bee3f8",
    100: "#ebf8ff",
  },
};

const fonts = {
  heading: "Noto Sans KR, sans-serif",
  body: "Noto Sans KR, sans-serif",
};

const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
