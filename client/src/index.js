import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ColorContectProvider from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <ColorContectProvider>
      <Router>
      <App />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="right" />
      </ColorContectProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
