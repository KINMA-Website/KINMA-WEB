import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext.jsx";
import { registerSW } from "virtual:pwa-register";

registerSW({
  immediate: true,
  });

  createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
              <CartProvider>
                      <AppRoutes />
                            </CartProvider>
                                </BrowserRouter>
                                  </StrictMode>
                                  );