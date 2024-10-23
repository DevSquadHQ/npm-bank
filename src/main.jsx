import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/main-layout/MainLayout.jsx";
import Home from "./pages/main-pages/Home.jsx";
import Report from "./pages/main-pages/Report.jsx";
import MoneyTransfer from "./pages/main-pages/MoneyTransfer.jsx";
import AccountSuspension from "./pages/main-pages/AccountSuspension.jsx";
import ChangePassword from "./pages/main-pages/ChangePassword.jsx";
import AccountList from "./pages/main-pages/AccountList.jsx";
import MyAccount from "./pages/main-pages/MyAccount.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "/moneyTransfer",
        element: <MoneyTransfer />,
      },
      {
        path: "/accountSuspension",
        element: <AccountSuspension />,
      },
      {
        path: "/changePassword",
        element: <ChangePassword />,
      },
      {
        path: "/accoutList",
        element: <AccountList />,
      },
      {
        path: "/myAccount",
        element: <MyAccount />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
