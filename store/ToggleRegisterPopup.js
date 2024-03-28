import { createSlice } from "@reduxjs/toolkit";
const initialState = false;

export const ToggleRegisterPopup = createSlice({
  name: "toggleRegisterPopup",
  initialState,
  reducers: {
    SetToggleRegisterPopup(state, action) {
      return action.payload;
    },
  },
});

export const { SetToggleRegisterPopup } = ToggleRegisterPopup.actions;

export default ToggleRegisterPopup.reducer;
