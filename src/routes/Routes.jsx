import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Contact from "../Pages/Others/Contact/Contact";
import Home from "../Pages/Others/Home/Home";


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
        }
      ]
    },
  ]);

  export default router