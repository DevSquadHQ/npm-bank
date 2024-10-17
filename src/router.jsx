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
        index: true,
      },
      {
        element: <SignUp />,
        path: "/signUp",
      },
    ],
  },
]);

export default router;
