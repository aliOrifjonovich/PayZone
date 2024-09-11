import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound/NotFound";
import Main from "pages/Main/Main";
import Profile from "pages/Profile/Profile";
import SingleGame from "pages/SingleGame/SingleGame";
import Steam from "pages/Steam/Steam";
import MyPayments from "pages/MyPayments/MyPayments";
import PaymentMethods from "pages/PaymentMethods/PaymentMethods";
import MyProfile from "pages/MyProfile/MyProfile";
import AdminCHat from "pages/AdminChat/AdminCHat";

export const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/single-game/:id",
      element: <SingleGame />,
    },
    {
      path: "/profile",
      element: <Profile />,
      children: [
        {
          index: true,
          element: <MyProfile />,
        },
        {
          path: "my-payments",
          element: <MyPayments />,
        },
        {
          path: "payment-methods",
          element: <PaymentMethods />,
        },
      ],
    },
    {
      path: "/steam",
      element: <Steam />,
    },
    {
      path: "/profile",
      element: <AdminCHat />,
      children: [
        {
          index: true,
          element: <MyProfile />,
        },
        {
          path: "my-payments",
          element: <MyPayments />,
        },
        {
          path: "payment-methods",
          element: <PaymentMethods />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
