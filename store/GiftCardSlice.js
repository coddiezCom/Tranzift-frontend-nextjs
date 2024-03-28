import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sku: "",
  gift_card_name: "",
  quantity: "",
  denomination: "",
  reciver_name: "",
  reciver_email: "",
  reciver_phone_number: "",
  reciver_message: "",
  deliveryOption: "send_as_Gift",
};

export const GiftCardDetail = createSlice({
  name: "giftCardDetail",
  initialState,
  reducers: {
    setGiftCardDetail(state, action) {
      state.sku = action.payload.sku;
      state.gift_card_name = action.payload.gift_card_name;
      state.quantity = action.payload.quantity;
      state.denomination = action.payload.denomination;
      state.reciver_name = action.payload.reciver_name;
      state.reciver_email = action.payload.reciver_email;
      state.reciver_phone_number = action.payload.reciver_phone_number;
      state.reciver_message = action.payload.reciver_message;
      state.deliveryOption = action.payload.deliveryOption;
    },
  },
});

export const { setGiftCardDetail } = GiftCardDetail.actions;

export default GiftCardDetail.reducer;
