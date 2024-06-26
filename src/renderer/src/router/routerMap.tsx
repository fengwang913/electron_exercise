// 路由表构建
 import { Navigate } from "react-router-dom";
 import Login from "../pages/login";
 import User from "../pages/user";
 import Community from "../pages/community";
 import LinkUp from "../pages/linkUp";
 import Layout from "../layout";
 import PrivateRoute from "./privateRoute";
 export const routerMap = [
     {
         path: "/login",
         element: <Login />,
     },
     {
         path: "/",
         element: (
             <PrivateRoute>
                 <Layout />
             </PrivateRoute>
         ),
         children: [
             {
                 path: "/user",
                 element: <User />,
             },
             {
                 path: "/community",
                 element: <Community />,
             },
             {
                 path: "/linkUp",
                 element: <LinkUp />,
             },
         ],
     },
     {
         path: "*",
         element: <Navigate to="/login" />,
     }, //其他没有被注册过的路径统一重定位到login
 ];