import React from "react";
import { FaShoppingCart,FaShopify,FaHome } from "react-icons/fa";


const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <FaHome></FaHome>,
  },
  {
    title: "Productos",
    path: "./productos",
    icon: <FaShopify ></FaShopify>,
  },
  {
    title: "Carrito",
    path: "./carrito",
    icon: <FaShoppingCart ></FaShoppingCart>,
  }/* ,
  {
    title: "Usuario",
    path: "./usuario",
    icon: <FaUserAlt ></FaUserAlt>,
    subnavs: [
      {
        title: "login",
        icon: <BiLogOut ></BiLogOut>,
      },
    ],
  }, */
];

export default SidebarData;
