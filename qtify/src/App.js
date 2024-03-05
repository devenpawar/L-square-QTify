import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AlbumPage from "./pages/AlbumPage/AlbumPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/album",
      element: <AlbumPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
