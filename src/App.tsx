import { ROUTES } from "@constants/router";
import "./App.css";
import TestPage from "@pages/test";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "@pages/root";

function App() {
  const router = createBrowserRouter([
    {
      path: ROUTES.ROOT,
      element: <Root />,
      children: [
        {
          path: ROUTES.ROOT,
          element: <TestPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
