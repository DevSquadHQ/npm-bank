import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/main-layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Report from "./pages/Report.jsx";
import MoneyTransfer from "./pages/MoneyTransfer.jsx";
import AccountSuspension from "./pages/AccountSuspension.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import AccountList from "./pages/AccountList.jsx";
import MyAccount from "./pages/MyAccount.jsx";

export const router = createBrowserRouter([
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
