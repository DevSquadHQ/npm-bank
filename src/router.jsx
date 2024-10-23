import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/indentity-pages/login/Login";
import IdentityLayout from "./layouts/identity-layout/IdentityLayout";
import SignUp from "./pages/indentity-pages/signup/SignUp";

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
