import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { IdentityLayout } from "./layouts/identity-layout";
import { SignUp } from "./pages/signup";

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
