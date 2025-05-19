import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from './../pages/home/Home';
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AvailableFood from './../pages/Available Foods/AvailableFood';
import AddFood from './../pages/Add Food/AddFood';
import MyFoodReq from './../pages/My Food Request/MyFoodReq';
import ManageFood from './../pages/Manage My Foods/ManageFood';
import FoodDetails from "../pages/foodDetails/FoodDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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

        },
        {
          path:"/availablefood",
          element: <AvailableFood></AvailableFood>
        },
        {
          path:"/addfood",
          element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
          path:"/foodrequest",
          element: <PrivateRoute><MyFoodReq></MyFoodReq></PrivateRoute>
        },
        {
          path:"/managefood",
          element: <PrivateRoute><ManageFood></ManageFood></PrivateRoute>
        },
        {
          path: "/foods/:id",
          element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:3000/foods/${params.id}`)
        }
      ],
    },
  ]);

  export default router;