import {
  FaUser,
  FaEdit,
  FaMapMarkerAlt,
  FaCreditCard,
  FaLock,
  FaClipboardList,
  FaMoneyBillAlt,
  FaTruck,
  FaBox,
  FaTimesCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const sidebarData = [
  {
    heading: "My Account",
    icon: <MdOutlineAccountCircle />,
    links: [
      {
        name: "My Profile",
        link: "/profile",
        icon: <FaUser />,
      },
      {
        name: "Update Profile ",
        link: "/profile/editProfile",
        icon: <FaEdit />,
      },
      {
        name: "Manage Addresses",
        link: "/profile/address",
        icon: <FaMapMarkerAlt />,
      },
      {
        name: "Account Security",
        link: "/profile/security",
        icon: <FaLock />,
      },
    ],
  },
  {
    heading: "My Orders",
    icon: <AiOutlineShoppingCart />,
    links: [
      {
        name: "All Orders",
        link: "/profile/orders",
        icon: <FaClipboardList />,
        filter: "",
      },
      {
        name: "Paid Orders",
        link: "/profile/orders",
        icon: <FaMoneyBillAlt />,
        filter: "paid",
      },
      {
        name: "Unpaid Orders",
        link: "/profile/orders",
        icon: <FaMoneyBillAlt />,
        filter: "unpaid",
      },
      {
        name: "Processing Orders",
        link: "/profile/orders",
        icon: <FaTruck />,
        filter: "Processing",
      },
      {
        name: "Dispatched Orders",
        link: "/profile/orders",
        icon: <FaTruck />,
        filter: "Dispatched",
      },
      {
        name: "Delivered Orders",
        link: "/profile/orders",
        icon: <FaTruck />,
        filter: "Delivered",
      },
      {
        name: "Cancelled Orders",
        link: "/profile/orders",
        icon: <FaTimesCircle />,
        filter: "Cancelled",
      },
    ],
  },
  {
    heading: "Sign out",
    link: [],
    icon: <FaSignOutAlt />,
  },
];

export const ordersLinks = [
  {
    name: "All Orders",
    filter: "",
    icon: <FaClipboardList />,
  },
  {
    name: "Paid Orders",
    filter: "paid",
    icon: <FaMoneyBillAlt />,
  },
  {
    name: "Unpaid Orders",
    filter: "unpaid",
    icon: <FaMoneyBillAlt />,
  },
  {
    name: "Processing Orders",
    filter: "Processing",
    icon: <FaTruck />,
  },
  {
    name: "Unprocessed Orders",
    filter: "Not Processed",
    icon: <FaBox />,
  },
  {
    name: "Dispatched Orders",
    filter: "Dispatched",
    icon: <FaTruck />,
  },
  {
    name: "Delivered Orders",
    filter: "Delivered",
    icon: <FaTruck />,
  },
  {
    name: "Cancelled Orders",
    filter: "Cancelled",
    icon: <FaTimesCircle />,
  },
];
