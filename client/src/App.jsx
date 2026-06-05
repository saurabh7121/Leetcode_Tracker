import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Problems from "./pages/Problems";
import Register from "./pages/Register";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/Login", element: <Login /> },
  { path: "/Problems/:id", element: <Problems /> },
  { path: "/Register", element: <Register /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
