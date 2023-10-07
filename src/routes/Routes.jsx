import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Contact from "../Pages/Others/Contact/Contact";
import Home from "../Pages/Others/Home/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
            path : "contact",
            element : <Contact></Contact>
        },
        {
          path : "login",
          element : <Login></Login>
        },
        {
          path : "register",
          element : <Register></Register>
        }
      ]
    },
  ]);

  export default router