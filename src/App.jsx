import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import ChatPage from "./pages/ChatPage/ChatPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Login from "./components/login/Login";
import Register from "./components/register/register";
import MainPage from "./pages/MainPage/MainPage";
import Explore from "./components/explore/Explore";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "/",
          element: <Explore />,
        },
        {
          path: "/chat",
          element: <ChatPage />,
        },
      ],
    },
    ,
    {
      path: "/",
      element: <AuthPage />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
