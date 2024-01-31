import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root.jsx";
import AgendaItems from "./pages/AgendaItems";
import "./index.css";
import Layout from "./components/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/agendaitems",
        element: <AgendaItems />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
