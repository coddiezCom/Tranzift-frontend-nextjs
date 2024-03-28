import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { applyMiddleware } from "@reduxjs/toolkit";

// import cart from "./cartSlice";
// import expandSidebar from "./ExpandSlice";
// import dialog from "./DialogSlice";
import userDetail from "./UserSlice";
import giftCardDetail from "./GiftCardSlice";
import toggleRegisterPopup from "./ToggleRegisterPopup";
import giftCardCoupon from "./GiftCardCoupon";
const reducers = combineReducers({ userDetail, giftCardDetail, giftCardCoupon, toggleRegisterPopup });

const config = {
  key: "root",
  storage,
};

const reducer = persistReducer(config, reducers);

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
