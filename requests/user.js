import apiHelper from "../utils/apiHelper";
import axios from "axios";

export const saveAddress = async (address, user) => {
  try {
    const baseUrl = "address/create-address";
    const data = await apiHelper(baseUrl, {}, "POST", {
      email: user?.email_id,
      addressType: "billing",
      addressLineOne: address?.address1,
      addressLineTwo: address?.address2,
      landmark: address?.landmark,
      city: address?.city,
      state: address?.state,
      country: address?.country,
      pincode: address?.zipCode,
    });
    return data.address;
  } catch (error) {
    return error.response.data.message;
  }
};
export const getAddress = async (associatedUser) => {
  try {
    const baseUrl = "address/get-all-address";
    const data = await apiHelper(
      baseUrl,
      {
        associatedUser: associatedUser,
      },
      "GET"
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const updateAddress = async (address, user) => {
  try {
    const baseUrl = `address/address/${user.defaultAddress}`;
    const data = await apiHelper(baseUrl, {}, "PATCH", {
      email: user?.email_id,
      addressType: "billing",
      addressLineOne: address?.address1,
      addressLineTwo: address?.address2,
      landmark: address?.landmark,
      city: address?.city,
      state: address?.state,
      country: address?.country,
      pincode: address?.zipCode,
    });
    return data.address;
  } catch (error) {
    return error;
  }
};
export const changeActiveAddress = async (addressID, user) => {
  try {
    const baseUrl = `user/setdefaultaddress/${user.user_id}`;
    const data = await apiHelper(baseUrl, {}, "PATCH", {
      addressId: addressID,
    });
    return data;
  } catch (error) {
    return error;
  }
};
export const deleteAddress = async (addressId) => {
  try {
    const baseUrl = `address/address/${addressId}`;
    const data = await apiHelper(baseUrl, {}, "DELETE");
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const applyCoupon = async (coupon) => {
  const { data } = await axios.post("/api/user/applyCoupon", {
    coupon,
  });
  return data;
};
