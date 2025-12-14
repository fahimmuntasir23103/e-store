import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthProvider from "./Context/AuthProvider";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
