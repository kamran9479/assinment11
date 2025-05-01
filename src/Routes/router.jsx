import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from './../pages/home/Home';
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path:"/login",
          element: <Login></Login>

        },
        {
          path:"/register",
          element: <SignUp></SignUp>
        }
      ],
    },
  ]);

  export default router