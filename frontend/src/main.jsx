import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
          {window.addEventListener("load", () => {
            const preloader = document.getElementById("preloader");
            if (preloader) {
              preloader.style.display = "none";
            }
          })}
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
