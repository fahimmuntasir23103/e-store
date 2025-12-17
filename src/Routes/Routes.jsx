import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Shop from "../Pages/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/shop",
        Component: Shop
      },
      {
        path: "/about",
        Component: About,
      },
    ],
  },
]);

export default router