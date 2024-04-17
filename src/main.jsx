import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#4a148c",
    800: "#6a1b9a",
    700: "#7b1fa2",
    600: "#8e24aa",
    500: "#9c27b0",
    400: "#ab47bc",
    300: "#ba68c8",
    200: "#ce93d8",
    100: "#e1bee7",
  },
};

const fonts = {
  heading: "Roboto, sans-serif",
  body: "Open Sans, sans-serif",
};

const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
