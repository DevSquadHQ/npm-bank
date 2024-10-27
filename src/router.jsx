import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/indentity-pages/login/Login";
import IdentityLayout from "./layouts/identity-layout/IdentityLayout";
import SignUp from "./pages/indentity-pages/signup/SignUp";

import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/main-layout//MainLayout.jsx";
import Home from "./pages/main-pages/Home/Home.jsx";
import Report from "./pages/main-pages/Report/Report.jsx";
import MoneyTransfer from "./pages/main-pages/Money-transfer/MoneyTransfer.jsx";
import AccountSuspension from "./pages/main-pages/Account-suspension/AccountSuspension.jsx";
import ChangePassword from "./pages/main-pages/Change-password/ChangePassword.jsx";
import AccountList from "./pages/main-pages/Account-list/AccountList.jsx";
import MyAccount from "./pages/main-pages/My-account/MyAccount.jsx";
import CreateAccount from "./pages/main-pages/Create-account/CreateAccount.jsx";

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
        {
          path: "/createAccount",
          element: <CreateAccount />,
        },
      ],
    },
  ]);
  