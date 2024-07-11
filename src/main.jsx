import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import Login from "./component/login/login";
import Home from "./component/home/home";
import Checkout from "./component/checkout/checkout";
import Thankyou from "./component/thankyou/thankyou";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "home",
    element: <Home/>
  },
 

  {
    path: "checkout",
    element: <Checkout/>,
  },
  {
    path: "contactus",
    element: <div>Contact us</div>,
  },

  {
    path: "Thankyou",
    element: <Thankyou/>,
  },
  
  

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
