import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShowCategories from "./context/showCategories/ShowCategories.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Theme } from "@radix-ui/themes";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ShowCategories>
        <QueryClientProvider client={queryClient}>
          <Theme>
            <App />
          </Theme>
        </QueryClientProvider>
      </ShowCategories>
    </BrowserRouter>
  </StrictMode>
);
