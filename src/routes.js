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
import AdminChatLayout from "Components/UI/AdminChatLayout/AdminChatLayout";
import ChatUsers from "Components/UI/ChatUsers/ChatUsers";
import Chat from "Components/UI/Chat/Chat";

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
      path: "/admin-chat",
      element: <AdminCHat />,
      children: [
        {
          index: true,
          element: <AdminChatLayout />,
        },
        {
          path: "/admin-chat/:gameId",
          element: <ChatUsers />,
          children: [
            {
              index: true,
              element: <AdminChatLayout />
            },
            {
              path: '/admin-chat/:gameId/:chatId',
              element: <Chat />
            }
          ]
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
