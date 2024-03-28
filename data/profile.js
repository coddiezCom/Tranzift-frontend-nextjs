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
import { IoWallet } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa6";

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
        name: "KYC",
        link: "/profile/editKyc",
        icon: <FaUserCheck />,
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
    ],
  },
  {
    heading: "My Wallet",
    icon: <IoWallet />,
    link: "/profile/wallet",
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
];
