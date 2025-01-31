import { ROUTES } from "@constants/router";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "@pages/root";
import { QueryClient, QueryClientProvider } from "react-query";
import MainPage from "@pages/main";

function App() {
  const router = createBrowserRouter([
    {
      path: ROUTES.ROOT,
      element: <Root />,
      children: [
        {
          path: ROUTES.ROOT,
          element: <MainPage />,
        },
      ],
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
