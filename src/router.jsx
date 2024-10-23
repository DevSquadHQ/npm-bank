import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import IdentityLayout from "./layouts/identity-layout/IdentityLayout";
import SignUp from "./pages/signup/SignUp";

const router = createBrowserRouter([
  {
    element: <IdentityLayout />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <SignUp />,
        index: true,
      },
    ],
  },
]);

export default router;
