import { createBrowserRouter, Navigate } from "react-router-dom";
import IdentityLayout from "./layouts/identity-layout/IdentityLayout";
import Login from "./pages/indentity-pages/login/Login";
import SignUp from "./pages/indentity-pages/signup/SignUp";
import MainLayout from "./layouts/main-layout//MainLayout.jsx";
import Home from "./pages/main-pages/Home/Home.jsx";
import Report from "./pages/main-pages/Report/Report.jsx";
import MoneyTransfer from "./pages/main-pages/Money-transfer/MoneyTransfer.jsx";
import AccountSuspension from "./pages/main-pages/Account-suspension/AccountSuspension.jsx";
import ChangePassword from "./pages/main-pages/Change-password/ChangePassword.jsx";
import AccountList from "./pages/main-pages/Account-list/AccountList.jsx";
import MyAccount from "./pages/main-pages/My-account/MyAccount.jsx";
import CreateAccount from "./pages/main-pages/Create-account/CreateAccount.jsx";
import NotFound from "./pages/NotFound.jsx";
import AcountInfo from "./pages/main-pages/Acount-info/AcountInfo.jsx";
import IdTest from "./pages/main-pages/Acount-info/IdTest.jsx";

const isAuthenticated = () => {
  return localStorage.getItem("login-token") !== null;
};

function ProtectedRoute({ element }) {
  return isAuthenticated() ? element : <Navigate to="/login" />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <ProtectedRoute element={<Home />} />,
        index: true,
      },
      {
        path: "/report",
        element: <ProtectedRoute element={<Report />} />,
      },
      {
        path: "/moneyTransfer",
        element: <ProtectedRoute element={<MoneyTransfer />} />,
      },
      {
        path: "/accountSuspension",
        element: <ProtectedRoute element={<AccountSuspension />} />,
      },
      {
        path: "/changePassword",
        element: <ProtectedRoute element={<ChangePassword />} />,
      },

      {
        path: "/accountList",
        element: <ProtectedRoute element={<AccountList />} />,
      },
      {
        path: "/myAccount",
        element: <ProtectedRoute element={<MyAccount />} />,
      },
      {
        path: "/createAccount",
        element: <ProtectedRoute element={<CreateAccount />} />,
      },
      {
        path: "/accountInfo",
        element: <ProtectedRoute element={<AcountInfo />} />,
      },
      {
        path: "/Info/:id",
        element: <IdTest />,
      },
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <SignUp />,
        path: "/signup",
      },
    ],
  },
  { element: <NotFound />, path: "*" },
]);
