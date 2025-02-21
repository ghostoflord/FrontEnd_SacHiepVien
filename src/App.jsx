import { Outlet, RouterProvider } from "react-router-dom";
import HeaderPage from "./pages/HeaderPage";
import FooterPage from "./pages/FooterPage";
import {
  createBrowserRouter,
} from "react-router-dom";
import User from "./pages/User";
import BookPage from "./pages/client/book/book";
import LoginPage from "./pages/client/login/login";
import DontPage from "./error/404Page";
import LayoutAdmin from "./component/admin/LayoutAdmin";


const Layout = () => {

  return (
    <div className='layout-app'>
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </div>
  )
}

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <DontPage />,
      children: [
        // { index: true, element: <Home /> },
        {
          path: "users",
          element: <User />,
        },
        {
          path: "books",
          element: <BookPage />,
        },
      ],
    },
    {
      path: "/admin",
      element: <LayoutAdmin />,
      errorElement: <DontPage />,
      children: [
        {
          path: "user",
          element: <User />,
        },
        {
          path: "book",
          element: <BookPage />,
        },
      ],
    },

    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}
