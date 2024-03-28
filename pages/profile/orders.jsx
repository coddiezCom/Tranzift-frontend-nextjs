// import react liabary
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/profile.module.scss";
// import components
import Layout from "../../components/profile/layout";
// import MUI
import { TablePagination } from "@mui/material";
import Modal from "@mui/material/Modal";
// Import react icons
import { RxBorderWidth } from "react-icons/rx";
// Import dayjs
import dayjs from "dayjs";
const ViewOrderDetailPopup = ({ toggleAddressForm, isToggleAddressForm }) => {
  return (
    <>
      <div className=" py-0.5  text-[#1973e8]    text-sm  " onClick={() => toggleAddressForm(true)}>
        <button className="font-bold  underline">View Details</button>
      </div>
      <Modal
        open={isToggleAddressForm}
        onClose={() => toggleAddressForm()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backgroundColor: "transparent" }}
        className={`my-2 ${styles.__modal}`}
      >
        <div className={`flex items-center justify-center  ${styles.__viewOrderPopup}`}>
          <div className="w-full flex flex-col items-start justify-start p-10 rounded-lg  border-gray-500/10    relative z-10 bg-white">
            <div className="order_header">
              <span className="order flex flex-row gap-1 text-sm">
                <span className="order_id font-semibold">Order ID</span>
                <span className="order_date">60415766(1 item)</span>
              </span>
            </div>
            <div className=" w-full flex flex-row gap-8  justify-between items-start rounded-lg   p-4  cursor-pointer">
              <div className="flex-col flex   items-start">
                <div className="flex flex-row gap-1  ">
                  <span className="font-bold">Flipkart E-Gift Card base</span>
                </div>
                <div className="flex flex-row gap-1 text-sm">
                  <span className="">{dayjs("2024-03-07T07:11:14.127Z").format("YYYY-MM-DD HH:mm:ss")}</span>
                </div>
                <div className="flex flex-row gap-1 ">
                  <span className="text-xs font-light">TRN : 12423-32423-2323</span>
                </div>
                <div className="px-2 py-0.5 text-sm  text-green-700   absolute top-0 left-0">
                  <button className="font-bold ">Success</button>
                </div>
                <span className="amount text-sm gap-1 flex  mt-2 ">
                  <span className="amount_id font-semibold">Amount</span>
                  <span className="amount_date">₹100</span>
                </span>
              </div>
              <div className="image_container">
                <Image
                  src={"/images/gift_card/Fastrack_E-Gift_Card_dtp.jpg"}
                  className="object-contain h-full w-40 rounded-lg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
            </div>
            <div
              className="cross absolute top-1 right-1 font-extrabold cursor-pointer hover:text-[#1973e8] hover:delay-200 transition ease-in-out delay-200"
              onClick={() => toggleAddressForm(false)}
            >
              X
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
const order = [
  {
    _id: "65eef527b07fd58fb68e7616",
    associatedUserId: "65e968b4de651fb93ff77dde",
    orderId: "TZF11032024567537",
    woohooOrderId: "ABF5550924866",
    qty: 1,
    amount: 100,
    sku: "GBV2PLEGC001",
    refno: "efghifj",
    woohoOrderStatus: "PROCESSING",
    __v: 0,
    createdAt: "2024-03-21T07:45:33.051Z",
  },
  {
    _id: "65f03167b44bd1b48128b73b",
    associatedUserId: "65e968b4de651fb93ff77dde",
    orderId: "TZF12032024130372",
    woohooOrderId: "ABF5550925088",
    qty: 2,
    amount: 200,
    sku: "GBV2PLEGC001",
    refno: "refno106523",
    woohoOrderStatus: "PROCESSING",
    createdAt: "2024-03-12T10:41:43.154Z",
    __v: 0,
  },
  {
    _id: "65f03262b44bd1b48128b747",
    associatedUserId: "65e968b4de651fb93ff77dde",
    orderId: "TZF12032024750172",
    woohooOrderId: "ABF5550925090",
    qty: 2,
    amount: 200,
    sku: "GBV2PLEGC001",
    refno: "refno782107",
    woohoOrderStatus: "PROCESSING",
    createdAt: "2024-03-12T10:45:54.871Z",
    __v: 0,
  },
];
const giftCardResponse = {
  _id: "65e96892d190d555e5ba4fb5",
  sku: "GBV2PLEGC001",
  nameOnWoohoo: "Flipkart E-Gift Card base",
  minPrice: 100,
  maxPrice: 10000,
  offersOnGC: [],
  productImgMob: "/images/gift_card/Fastrack_E-Gift_Card_dtp.jpg",
  productImgWeb: "/images/gift_card/Fastrack_E-Gift_Card_dtp.jpg",
  giftCardProvider: "woohoo",
  isActive: true,
  isNewGiftCard: true,
  availableCoupon: [],
  createdAt: "2024-03-07T07:11:14.127Z",
  __v: 0,
};
export default function Index({ tab, orders }) {
  const [isToggleAddressForm, setIsToggleAddressForm] = useState(false);
  const userData = useSelector((state) => state.userDetail);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const toggleAddressForm = () => {
    console.log("clicked");
    setIsToggleAddressForm(!isToggleAddressForm);
  };
  return (
    <Layout session={userData} tab={tab}>
      <Head>
        <title>Orders</title>
      </Head>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between w-full items-center">
          <div className="text-lg font-semibold flex flex-row items-center justify-center">
            <span className="">
              <RxBorderWidth />
            </span>
            <span>My Order</span>
          </div>
        </div>
        <hr className="divide-y divide-solid w-full my-1" />

        <div className="text-lg w-full font-semibold flex flex-row items-center justify-between">
          <span className="">Orders</span>
        </div>
        <hr className="divide-y divide-solid w-full my-1" />
        <ul className="w-full flex flex-col items-start justify-start my-2 pl-8">
          {order.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <li
              key={index}
              className="w-full flex flex-col items-start justify-start border-b-2 border-gray-500/10 py-2 "
            >
              <div className="order_header">
                <span className="order flex flex-row gap-1 text-sm">
                  <span className="order_id font-semibold">Order ID</span>
                  <span className="order_date">60415766(1 item)</span>
                </span>
              </div>
              <div className=" w-full flex flex-row border-2 border-gray-100/95 justify-between items-start rounded-lg shadow-lg p-4 hover:shadow-inner hover:shadow-[#1973e875]  transition ease-in-out duration-300 hover:duration-300 cursor-pointer">
                <div className="flex-col flex gap-2 items-start">
                  <div className="flex flex-row gap-1  ">
                    <span className="font-bold">Flipkart E-Gift Card base</span>
                  </div>
                  <div className="flex flex-row gap-1 text-sm">
                    <span className="">{dayjs("2024-03-07T07:11:14.127Z").format("YYYY-MM-DD HH:mm:ss")}</span>
                  </div>
                  <div className="px-2 py-0.5 rounded-md  text-sm shadow-md border-green-700 text-green-700 border-2">
                    <button className="font-bold ">Success</button>
                  </div>
                  <ViewOrderDetailPopup
                    toggleAddressForm={toggleAddressForm}
                    isToggleAddressForm={isToggleAddressForm}
                  />
                </div>
                <div className="image_container">
                  <Image
                    src={giftCardResponse?.productImgMob}
                    className="object-contain h-full w-40 rounded-lg"
                    width={500}
                    height={500}
                    alt=""
                  />
                  <span className="amount text-sm gap-1 flex  mt-2 ">
                    <span className="amount_id font-semibold">Amount</span>
                    <span className="amount_date">₹100</span>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={order.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </Layout>
  );
}
export async function getServerSideProps(ctx) {
  const { query } = ctx;
  // const session = await getSession({ req });
  const tab = query.tab || 0;
  //------------
  let orders = [];
  return {
    props: { user: null, tab, orders: JSON.parse(JSON.stringify(orders)) },
  };
}
