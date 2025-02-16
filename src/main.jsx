import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from "./pages/User";
import App from "./App";
import DontPage from "./error/404Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    errorElement: <DontPage />,
    children: [
      {
        path: "/users",
        element: <User />,
      },
    ],
  },
  {
    path: "/books",
    // element: <User />,
    // errorElement: <ErrorPage />,
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);