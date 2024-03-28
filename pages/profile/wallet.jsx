import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/profile.module.scss";
import { useSelector } from "react-redux";
import Layout from "../../components/profile/layout";
import ShippingInput from "../../components/inputs/shippingInput";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { FaEdit, FaSort, FaFilter } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel,
  TextField,
  IconButton,
} from "@mui/material";
import dayjs from "dayjs";

const createData = (dateTime, TXN_ID, Order_desc, Order_qty, TXN_Amount, status) => {
  return { dateTime, TXN_ID, Order_desc, Order_qty, TXN_Amount, status };
};

const transactions = [
  {
    _id: "65faa14926c18f732a2d9182",
    userId: "65e968b4de651fb93ff77dde",
    cashFreeOrderId: "sdfljnasdlkjsdfalk",
    TXNID: "sdafdfsadf",
    orderId: {
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
      createdAt: "2024-03-20T08:56:13.450Z",
    },
    Status: "success",
    createdAt: "2024-03-20T08:41:45.631Z",
    __v: 0,
  },
  {
    _id: "65faa14926c18f732a2d9182",
    userId: "65e968b4de651fb93ff77dde",
    cashFreeOrderId: "sdfljnasdlkjsdfalk",
    TXNID: "sdafdfsadf",
    orderId: {
      _id: "65eef527b07fd58fb68e7616",
      associatedUserId: "65e968b4de651fb93ff77dde",
      orderId: "TZF11032024567537",
      woohooOrderId: "ABF5550924866",
      qty: 1,
      amount: 200,
      sku: "GBV2PLEGC001",
      refno: "efghifj",
      woohoOrderStatus: "PROCESSING",
      __v: 0,
      createdAt: "2024-03-20T08:56:13.450Z",
    },
    Status: "fail",
    createdAt: "2024-03-20T08:41:45.631Z",
    __v: 0,
  },
  // Add more transactions as needed
];

const Index = ({ tab }) => {
  const userData = useSelector((state) => state.userDetail);
  const [filterText, setFilterText] = useState("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredRows = transactions.filter(
    (row) =>
      row.createdAt.toLowerCase().includes(filterText.toLowerCase()) ||
      row.TXNID.toLowerCase().includes(filterText.toLowerCase()) ||
      row.orderId.orderId.toLowerCase().includes(filterText.toLowerCase()) ||
      row.orderId.qty.toString().toLowerCase().includes(filterText.toLowerCase()) ||
      row.orderId.amount.toString().toLowerCase().includes(filterText.toLowerCase()) ||
      row.Status.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Layout session={userData} tab={tab}>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between w-full items-center">
          <div className="text-lg font-semibold flex flex-row items-center justify-center">
            <span className="">
              <IoWallet />
            </span>
            <span>Wallet Balance</span>
          </div>
          <div className="flex items-center">
            <span className="text-white">Balance:</span>
            <b>₹ 0</b>
          </div>
        </div>
        <hr className="divide-y divide-solid w-full my-1" />

        <div className="text-lg w-full font-semibold flex flex-row items-center justify-between">
          <span className="">Transactions</span>
          <span>
            <IconButton>
              <FaFilter />
            </IconButton>
            <TextField
              label="Filter"
              variant="outlined"
              size="small"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </span>
        </div>
        <hr className="divide-y divide-solid w-full my-1" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel sx={{ fontWeight: "700" }} IconComponent={FaSort}>
                    Date/Time
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={{ fontWeight: "700" }}>Transaction Id</TableCell>
                <TableCell sx={{ fontWeight: "700" }}>Order description</TableCell>
                <TableCell sx={{ fontWeight: "700" }}>Order quantity</TableCell>
                <TableCell sx={{ fontWeight: "700" }}>TXN Amount</TableCell>
                <TableCell sx={{ fontWeight: "700" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    {dayjs(row.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                  </TableCell>
                  <TableCell>{row.TXNID}</TableCell>
                  <TableCell>{row.orderId.orderId}</TableCell>
                  <TableCell>{row.orderId.qty}</TableCell>
                  <TableCell>{`₹ ${row.orderId.amount}`}</TableCell>
                  <TableCell>{row.Status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </Layout>
  );
};

export default Index;
export async function getServerSideProps(ctx) {
  const { query, req } = ctx;
  const tab = query.tab || 0;
  return {
    props: { tab },
  };
}
