import React, { useState } from "react";
import styles from "@/styles/checkout.module.scss";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import { LuLoader2 } from "react-icons/lu";
import { load } from "@cashfreepayments/cashfree-js";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
export const ProductDetails = () => {
  return (
    <>
      <div className={"shadow-2xl   p-4 rounded-md w-[63%] flex flex-col gap-6  "}>
        <div className={"flex justify-start mr-auto"}>
          <h2 className="font-extrabold font-serif text-2xl">Product Details</h2>
        </div>
        <div class="flex flex-col w-full gap-0">
          <div className="flex flex-row bg-gray-50 border-t-2 border-slate-200 w-full py-2 px-2 justify-between   ">
            <span className="w-4/12 md:w-1/2 sm:text-base text-xs">Product Name</span>
            <span className="w-4/6 md:w-1/2 sm:text-base text-xs">Peter England E-Gift Voucher</span>
          </div>
          <div className="flex flex-row bg-gray-50 border-t-2 border-slate-200 w-full py-2 px-2 justify-between ">
            <span className="w-4/12 md:w-1/2 sm:text-base text-xs">Gift Card</span>
            <span className="w-4/6 md:w-1/2 sm:text-base text-xs">
              <Image
                src="/images/gift_card/Fastrack_E-Gift_Card_dtp.jpg"
                className="w-3/4 h-full object-contain rounded-lg"
                alt="alt"
                width={500}
                height={500}
              />
            </span>
          </div>
          <div className="flex flex-row bg-gray-50 border-t-2 border-slate-200 w-full py-2 px-2 justify-between ">
            <span className="w-4/12 md:w-1/2    sm:text-base text-xs">Price</span>
            <span className="w-4/6 md:w-1/2 sm:text-base text-xs">500</span>
          </div>
          <div className="flex flex-row bg-gray-50 border-y-2 border-slate-200 w-full py-2 px-2 justify-between ">
            <span className="w-4/12 md:w-1/2 sm:text-base text-xs">Quantity</span>
            <span className="w-4/6 md:w-1/2 sm:text-base text-xs">1</span>
          </div>
        </div>
        <div className={"flex justify-start mr-auto"}>
          <h2 className="font-extrabold font-serif text-2xl">Receiver Details</h2>
        </div>
        <div class="flex flex-col w-full gap-0">
          <div className="flex flex-row bg-gray-50 border-t-2 border-slate-200 w-full py-2 px-2 justify-between">
            <span className="w-4/12 text-xs md:w-1/2 sm:text-base">Name</span>
            <span className="w-4/6 text-xs md:w-1/2 sm:text-base">jaspreet singh</span>
          </div>
          <div className="flex flex-row bg-gray-50 border-t-2 border-slate-200 w-full py-2 px-2 justify-between">
            <span className="w-4/12 text-xs md:w-1/2 sm:text-base">Email</span>
            <span className="w-4/6 text-xs md:w-1/2 sm:text-base">jaspreetsingh09915@gmail.com</span>
          </div>

          <div className="flex flex-row bg-gray-50 border-t-2 border-slate-200 w-full py-2 px-2 justify-between">
            <span className="w-4/12 text-xs md:w-1/2 sm:text-base">Mobile</span>
            <span className="w-4/6 text-xs md:w-1/2 sm:text-base">9910741866</span>
          </div>
          <div className="flex flex-row bg-gray-50 border-y-2 border-slate-200 w-full py-2 px-2 justify-between">
            <span className="w-4/12 text-xs md:w-1/2 sm:text-base">Message</span>
            <span className="w-4/6 text-xs md:w-1/2 sm:text-base">purchasing gift card</span>
          </div>
          <div className="flex flex-row bg-gray-50 border-y-2 border-slate-200 w-full py-2 px-2 justify-between">
            <span className="w-4/12 text-xs md:w-1/2 sm:text-base">Delivery Mode</span>
            <span className="w-4/6 text-xs md:w-1/2 sm:text-base">EMAIL</span>
          </div>
        </div>
      </div>
    </>
  );
};

export const OrderSummary = ({ doPayment }) => {
  const [showMoreCoupon, setShowMoreCoupon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleCopy = (codeToCopy) => {
    // console.log("Text copied to clipboard:", codeToCopy);
    toast.success(`coply to clipboard: ${codeToCopy}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const coupon = [
    {
      code: "TRAVEL8",
      discount: "5",
      totalAfterDiscount: "250",
      message: "Enjoy special discounts on your Gift card",
    },
    {
      code: "TRAVEL10",
      discount: "10",
      totalAfterDiscount: "250",
      message: "Enjoy special discounts on your Gift card",
    },
    {
      code: "TRAVEL15",
      discount: "15",
      totalAfterDiscount: "250",
      message: "Enjoy special discounts on your Gift card",
    },
    {
      code: "TRAVEL15",
      discount: "15",
      totalAfterDiscount: "250",
      message: "Enjoy special discounts on your Gift card",
    },
    {
      code: "TRAVEL15",
      discount: "15",
      totalAfterDiscount: "250",
      message: "Enjoy special discounts on your Gift card",
    },
    {
      code: "TRAVEL15",
      discount: "15",
      totalAfterDiscount: "250",
      message: "Enjoy special discounts on your Gift card",
    },
    {
      code: "TRAVEL15",
      discount: "15",
      totalAfterDiscount: "250",
      message: "Enjoy special discounts on your Gift card",
    },
  ];
  const billSumary = [
    {
      title: "Amount",
      value: "₹ 500",
    },
    {
      title: "Discount",
      value: "₹ 0",
    },
    {
      title: "Shipping and Handing",
      value: "₹ 0",
    },
    {
      title: "Order Total",
      value: "₹ 500",
    },
  ];
  const handleToggleCoupon = (code) => {
    // setIsLoading(true);
    // setTimeout(() => {
    setShowMoreCoupon((showMoreCoupon) => !showMoreCoupon);
    // }, 1000);
    // setIsLoading(false);
  };
  return (
    <>
      <div className={"shadow-2xl   p-4 rounded-md w-[35%] flex flex-col gap-6    "}>
        <div className={"flex justify-start mr-auto"}>
          <h2 className="font-extrabold font-serif text-2xl">Cart Total</h2>
        </div>
        <div class="flex flex-col  w-full gap-0">
          {billSumary.map((items, index) => {
            return (
              <div
                key={index}
                className="flex flex-row bg-gray-50 border-t-2 border-slate-200 w-full py-2 px-4 justify-between text-sm"
              >
                <span className="w-1/2 font-[verdana] text-xs sm:text-base ">{items?.title}</span>
                <span className="w-1/2 text-end font-[verdana] text-xs sm:text-base">{items?.value}</span>
              </div>
            );
          })}
          <button
            onClick={() => doPayment()}
            class="px-4 py-2 ml-auto text-center mt-4 text-base rounded-lg border-2 w-fit  border-solid text-[#1973e8]  border-[#1973e8] transition duration-300 ease-in-out transform hover:scale-105  hover:bg-[#1973e8] hover:text-white font-bold     "
          >
            Proceed To Pay
          </button>
        </div>

        <div className={"border-2 border-gray-300 flex flex-col w-full justify-start mr-auto p-2 rounded-md"}>
          <h2 className="font-thin font-serif mr-auto text-base">If you have a coupon code, please apply it below.</h2>
          <div className=" w-full mx-3">
            <div class="relative border-2 border-gray-400 rounded-md my-3">
              <label for="Search" class="sr-only">
                {" "}
                Search{" "}
              </label>

              <input
                type="text"
                id="Search"
                placeholder="Coupon Code."
                class="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm px-2"
              />

              <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button type="button" class="text-gray-600 hover:text-gray-700">
                  <span class="sr-only">Search</span>
                  <FaCheck />
                </button>
              </span>
            </div>
            <div>
              <ul className="flex flex-col w-full justify-start items-center mr-auto px-4 p-2 rounded-md ">
                <div className={`max-h-64 w-full snap-x ${showMoreCoupon ? "overflow-y-scroll" : ""} `}>
                  {coupon.slice(0, showMoreCoupon ? coupon.length : 3).map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-col  justify-start items-start   border-b-[0.5px] border-gray-300 w-[100%]  py-2  gap-1  "
                      >
                        <span className="flex flex-row font-sans text-base justify-between w-full items-baseline">
                          <CopyToClipboard text={item?.code} onCopy={() => handleCopy(item?.code)}>
                            <p className="cursor-pointer text-gray-600 border-2 px-1 py-0.5 text-xs font-bold rounded-sm border-dashed border-gray-800 hover:text-orange-800 hover:border-orange-800">
                              {item?.code}
                            </p>
                          </CopyToClipboard>
                          <button className="text-[#1973e8] hover:text-blue-800 text-sm underline ">Apply</button>
                        </span>
                        <span className="flex flex-row font-[verdana] ">
                          <p className="font-light text-sm text-black">{item?.message} </p>
                        </span>
                        <span className="flex flex-row font-sans text-sm   ">
                          <p className="underline text-red-700 ">T&Cs</p>
                          <p className="text-[#087830]">Save ₹{item?.discount}</p>
                        </span>
                      </li>
                    );
                  })}
                </div>
                <li
                  onClick={handleToggleCoupon}
                  className="flex flex-row font-serif text-base justify-center w-full pt-2 items-baseline"
                >
                  <p className="underline text-sm text-[#087830] cursor-pointer flex items-center justify-center">
                    {showMoreCoupon ? "View Less" : "View All"} {isLoading && <LuLoader2 className="animate-spin" />}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Index = () => {
  let cashfree;
  var initializeSDK = async function () {
    cashfree = await load({
      mode: "sandbox",
    });
  };
  initializeSDK();
  const UserDetail = useSelector((state) => state.userDetail);
  const doPayment = async () => {
    console.log(UserDetail, "UserDetail1");
    try {
      const sampleData = {
        amount: 10,
        username: UserDetail?.user_name,
        name: "akash",
        email: UserDetail?.email_id,
        mobile: "8130184926",
      };
      const orderResponse = await axios.post("http://127.0.0.1:8000/api/v1/payment/createorder", sampleData);
      let checkoutOptions = {
        paymentSessionId: orderResponse.data.data.payment_session_id,
        redirectTarget: "_self",
      };
      console.log(orderResponse, "orderResponse");
      cashfree.checkout(checkoutOptions);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={`flex items-center justify-center ${styles.__checkout}`}>
      <div
        className={`flex-wrap   m-4   rounded-md     flex flex-row items-start justify-between ${styles.__checkout__wrapper}`}
      >
        <ProductDetails />
        <OrderSummary doPayment={doPayment} />
      </div>
    </div>
  );
};

export default Index;
