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
const reducers = combineReducers({ userDetail });

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

// import { configureStore } from "@reduxjs/toolkit";
// import { UserDetail } from "./UserSlice";
// export const store = configureStore({
//   reducer: {
//     UserDetail: UserDetail,
//   },
// });
