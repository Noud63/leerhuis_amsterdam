import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root";
import Aktueel from "./pages/Aktueel";
import "./index.css";
import Layout from "./components/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllActivities from "./pages/AllActivities";
import InfoCalendarItem from "./pages/InfoCalendarItem";
import Subscribe from "./pages/Subscribe";
import Contact from "./pages/Contact";


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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/allactivities",
        element: <AllActivities />,
      },
      {
        path: "/allactivities/infocalendaritem/:id",
        element: <InfoCalendarItem />,
      },
      {
        path: "/subscribe/:id",
        element: <Subscribe />,
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
