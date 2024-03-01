import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "@/components/cart/header";
import styles from "@/styles/payment_status.module.scss";
import apiHelper from "@/utils/apiHelper";
import Link from "next/link";
import Head from "next/head";
import dayjs from "dayjs";
import { FaPrint } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import ReactToPrint from "react-to-print";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
const formatTransactionId = (txnId) => {
  const formattedTxnId = txnId.replace(/^(\w{3})(\d{4})(\d{4})(\d{4})(\d{4})$/, "$1-$2-$3-$4-$5");
  return formattedTxnId;
};
// table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "hsl(214deg 97% 57% / 20%)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" sx={{ fontWeight: "bold" }} color="#2681fc">
          {`${Math.round(props.value)}`}
        </Typography>
      </Box>
    </Box>
  );
}
CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export function PaymentStatusCard({ paymentResponseData }) {
  const { order_id, order_amount, order_status, order_date, order_details } = paymentResponseData;
  const successMessage = "Thank you for purchasing a gift card. Your payment has been successfully processed.";
  const FailedMessage = "We're sorry, but there was an issue processing your payment. Please try again.";
  const errorNote = "Any amount deducted will be refunded to your bank account within 3-5 business days.";
  const orderCreatedDate = dayjs(order_date).format("dddd  D, YYYY, h:mm A");
  const customerName = order_details?.customer_details?.customer_name;

  const componentRef = React.useRef();
  console.log(componentRef.current, "ref");
  function createData(name, value) {
    return { name, value };
  }

  const tableData = [
    createData("Transaction ID", formatTransactionId(order_id)),
    createData("Transaction Status", order_status),
    createData("Recipient", customerName),
    createData("Payment For", "Purchasing a Gift Card"),
    createData("Date & Time", orderCreatedDate),
    createData("Message", "Enjoy your gift card!"),
    createData("Amount", `₹ ${order_amount}`),
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div ref={componentRef} className="flex flex-col items-center  pt-12 justify-center space-y-2">
          <div className="flex flex-col items-center justify-center space-y-2">
            <GiftIcon
              className={`h-12 w-12  ${
                order_status
                  ? order_status == "PAID" || order_status == "ACTIVE"
                    ? "text-[#2681fc] dark:text-[#2681fc] "
                    : " text-red-500 dark:text-red-400 "
                  : ""
              } `}
            />
            <h1
              className={`font-bold tracking-tighter text-3xl leading-none sm:text-5xl md:text-5xl ${
                order_status
                  ? order_status == "PAID" || order_status == "ACTIVE"
                    ? "text-[#2681fc]   "
                    : " text-red-500 dark:text-red-400 "
                  : ""
              } `}
            >
              {order_status
                ? order_status == "PAID" || order_status == "ACTIVE"
                  ? "Payment Success"
                  : "Payment Failed"
                : ""}
            </h1>
            <p
              className={`mx-auto text-center ${
                order_status
                  ? order_status == "PAID" || order_status == "ACTIVE"
                    ? "text-red-500 dark:text-red-400 "
                    : " text-red-500 dark:text-red-400 "
                  : ""
              } md:w-1/2 lg:w-3/5 `}
            >
              {order_status
                ? order_status == "PAID" || order_status == "ACTIVE"
                  ? successMessage
                  : FailedMessage
                : ""}
            </p>
          </div>
          <div className="w-full max-w-[500px] space-y-4 py-2 px-2">
            <TableContainer component={Paper} sx={{ boxShadow: "0px 0px 0px 2px hsl(214deg 97% 57% / 20%)" }}>
              <Table sx={{ maxWidth: 500 }} aria-label="customized table">
                <TableBody>
                  {tableData.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.value}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="flex  gap-2 min-[400px] flex-row justify-end">
          <Link
            className="flex-1 inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 gap-2 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="/"
          >
            <AiFillHome />
            Home
          </Link>
          <ReactToPrint
            trigger={() => (
              <button className="flex-1 inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 gap-2 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                <FaPrint />
                Print
              </button>
            )}
            content={() => componentRef.current}
          />
        </div>
      </div>
    </>
  );
}
const PaymentStatus = ({ paymentOrder, error }) => {
  console.log(paymentOrder, "paymentOrder");
  const [progress, setProgress] = useState(1);
  const [transactionData, setTransactionData] = useState("");
  const router = useRouter();
  const paymentResponseData = {
    order_id: paymentOrder?.orderDetails?.order_id,
    order_amount: paymentOrder?.orderDetails?.order_amount,
    order_status: paymentOrder?.orderDetails?.order_status,
    order_details: paymentOrder?.orderDetails,
    order_date: paymentOrder?.orderDetails?.created_at,
  };
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userDetail);
  const paymentOrderStatus = paymentOrder?.orderDetails?.order_status;

  console.log(paymentOrder, paymentOrderStatus, "paymentOrderStatus");
  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const baseUrl = "transaction/create-transaction";
        const trn = await apiHelper(baseUrl, {}, "POST", {
          userName: userDetail.user_name,
          cashFreeOrderId: paymentOrder.data.orderDetails.cf_order_id,
          TXNID: paymentOrder.data.orderDetails.order_id,
          TXNAmount: paymentOrder.data.orderDetails.order_amount,
          Status: paymentOrder.data.orderDetails.order_status,
        });
        setTransactionData(trn);
      } catch (error) {
        console.error("Error fetching transaction:", error);
      }
    };
    fetchTransaction();
  }, [paymentOrder, userDetail]);

  useEffect(() => {
    if (paymentOrderStatus === "PAID") {
      createWoohooOrder();
    }
  }, [paymentOrderStatus]);

  const createWoohooOrder = async () => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    try {
      const baseUrl = "woohooproduct/create-order";
      const check = await apiHelper(baseUrl, {}, "POST", {
        address: {
          firstname: "Akash Singh",
          country: "IN",
          postcode: 110046,
          email: "akas21901@gmail.com",
          telephone: "+918130184926",
          billToThis: true,
        },
        // billing: {
        //   firstname: "Akash Singh",
        //   line1: "Falt No-1",
        //   city: "New Delhi",
        //   region: "Delhi",
        //   country: "IN",
        //   postcode: 110046,
        //   email: "akas21901@gmail.com",
        //   telephone: "+918130184926",
        // },
        payments: [
          {
            code: "svc",
            amount: 100,
            poNumber: "akas21901",
          },
        ],
        products: [
          {
            sku: "GBV2PLEGC001",
            price: 100,
            qty: 1,
            currency: "356",
            payout: {
              id: "a1",
              type: "BANK_ACCOUNT",
              ifscCode: "SBIN0030262",
              name: "Akash Singh",
              accountNumber: "1234567890123456",
              telephone: "+918130184926",
              transactionType: "IMPS",
              email: "akas21901@gmail.com",
            },
          },
        ],
        refno: `refno${randomNumber}`,
        deliveryMode: "API",
        userName: "jassi",
      });
      check && console.log(check, "check");
    } catch (error) {
      console.error("Error creating Woohoo order:", error);
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  if (progress == 99) {
    router.push("/");
  }
  return (
    <div className={styles.__container}>
      <Head>
        <title>Tranzift - Payment Status</title>
      </Head>
      <div className={styles.__progress}>
        <span>Redirecting to order page</span>
        <CircularProgressWithLabel value={progress} />
      </div>
      <Header usedFor={"payment_status"} />
      <PaymentStatusCard paymentResponseData={paymentResponseData} />
    </div>
  );
};

export default PaymentStatus;

function GiftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect width="20" height="5" x="2" y="7" />
      <line x1="12" x2="12" y1="22" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export async function getServerSideProps(context) {
  try {
    const { query } = context;
    const orderId = query.order_id;
    const paymentOrderStatusData = await getPaymentOrderDetail(orderId);
    return {
      props: {
        paymentOrder: paymentOrderStatusData.data,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        paymentOrder: null,
        error: {
          message: error.message || "An error occurred",
        },
      },
    };
  }
}

const getPaymentOrderDetail = async (orderId) => {
  try {
    const baseUrl = `payment/getorderstatus/${orderId}`;
    const orderResponse = await apiHelper(baseUrl);
    return orderResponse;
  } catch (error) {
    return error;
  }
};
