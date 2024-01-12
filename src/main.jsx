import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Deatilpage from "./pages/detailPage/Deatilpage.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";
import Searchpage from "./pages/searchPage/Searchpage.jsx";
import PageNotFound from "./pages/404/PageNotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:id",
        element: <Deatilpage />,
      },
      {
        path: "/search",
        element: <Searchpage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
