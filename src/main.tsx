import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Footer from "./components/Footer.tsx";
import Menu from "./components/Menu.tsx";
import { ViewportProvider } from "./context/ViewportContext.tsx";

const router = createBrowserRouter([
  {
    path: "/blizzard-challenge",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ViewportProvider>
      <Menu />
      <RouterProvider router={router} />
      <Footer />
    </ViewportProvider>
  </React.StrictMode>,
);
