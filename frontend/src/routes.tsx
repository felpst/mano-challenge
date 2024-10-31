import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "./pages/error/NotFound";
import { Layout } from "./layout/layout";
import MainPage from "./pages";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export { router };
