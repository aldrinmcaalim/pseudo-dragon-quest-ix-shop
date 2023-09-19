import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

// 3rd party
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// routes
import Navigation from "./routes/navigation/Navigation.component";
import Home from "./routes/home/Home.component";
import Shop from "./routes/shop/Shop.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { path: "", element: <Home /> },
      { path: "shop", element: <Shop /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
