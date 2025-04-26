import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { MainLayout } from "../MainComponent/MainLayout";
import Home from "../AllComponents/HomePage/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
    {
         path:"/",
         element:<Home></Home>,
    }
    ]
    },
  ]);

  export default router;