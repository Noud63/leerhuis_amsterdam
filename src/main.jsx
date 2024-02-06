import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root";
import Aktueel from "./pages/Aktueel";
import "./index.css";
import Layout from "./components/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllActivities from "./components/AllActivities";
import InfoCalendarItem from "./components/InfoCalendarItem";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/aktueel",
        element: <Aktueel />,
      },
      {
        path: "/allactivities",
        element: <AllActivities />,
      },
      {
        path: "allactivities/infocalendaritem/:id",
        element: <InfoCalendarItem />,
      },
      {
        path: "/infocalendaritem/:id",
        element: <InfoCalendarItem />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
