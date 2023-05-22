import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import App from "./App";

import { store } from "./Redux/store";
import { theme } from "./shared/theme";
import ErrorBoundary from "./shared/ErrorBoundry";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
