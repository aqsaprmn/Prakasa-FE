import { BiCart, BiUserCircle } from "react-icons/bi";
import { permissionFullExtractor } from "../Processor";
import { FaProductHunt } from "react-icons/fa";

export const defaultRoleV2 = {
  initialRoute: "/home",
  routes: [
    {
      id: 1,
      title: "Order",
      icon: <BiCart />,
      route: "/admin/order",
      expanded: false,
      translationKey: "Order",
      childre: [],
      isHidden: true,
    },
    {
      id: 2,
      title: "Product",
      icon: <FaProductHunt />,
      route: "/admin/product",
      expanded: false,
      translationKey: "Product",
      childre: [],
      isHidden: true,
    },
    {
      id: 3,
      title: "User",
      icon: <BiUserCircle />,
      route: "/admin/user",
      expanded: false,
      translationKey: "User",
      childre: [],
      isHidden: true,
    },
  ],
};
