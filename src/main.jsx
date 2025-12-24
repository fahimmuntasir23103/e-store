import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthProvider from "./Context/AuthProvider";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes";
import DataProvider from "./Context/DataProvider";
import WishListProvider from "./Context/WishListProvider";
import CartProvider from "./Context/CartProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
        <WishListProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </WishListProvider>
      </DataProvider>
    </AuthProvider>
  </StrictMode>
);
