import styles from "./styles.module.scss";
// import react liabary
import { useState } from "react";
// import yup validation
import * as Yup from "yup";
import { Form, Formik } from "formik";
// import components
import ShippingInput from "../../inputs/shippingInput";
import { countries } from "../../../data/countries";
import SingularSelect from "../../selects/SingularSelect";
// import react-icons
import { RxCross1 } from "react-icons/rx";
const AddressForm = ({ handleSubmit, closeForm, address, role }) => {
  // console.log(address, "address");
  const initialValues = {
    state: address?.state || "",
    city: address?.city || "",
    zipCode: address?.pincode || "",
    address1: address?.addressLineOne || "",
    address2: address?.addressLineTwo || "",
    country: address?.country || "",
    addressType: address?.addressType || "",
  };
  const [shipping, setShipping] = useState(initialValues);
  const { state, city, zipCode, address1, address2, country } = shipping;
  const validate = Yup.object({
    state: Yup.string()
      .required("State name is required.")
      .min(2, "State name should contain 2-60 characters..")
      .max(60, "State name should contain 2-60 characters."),
    city: Yup.string()
      .required("City name is required.")
      .min(2, "City name should contain 2-60 characters.")
      .max(60, "City name should contain 2-60 characters."),
    zipCode: Yup.string()
      .required("ZipCode/Postal is required.")
      .min(2, "ZipCode/Postal should contain 2-30 characters..")
      .max(30, "ZipCode/Postal should contain 2-30 characters."),
    address1: Yup.string()
      .required("Address Line 1 is required.")
      .min(5, "Address Line 1 should contain 5-100 characters.")
      .max(100, "Address Line 1 should contain 5-100 characters."),
    address2: Yup.string()
      .min(5, "Address Line 2 should contain 5-500 characters.")
      .max(500, "Address Line 2 should contain 5-500 characters."),
    country: Yup.string().required("Country name is required."),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShipping({ ...shipping, [name]: value });
  };
  return (
    <div className={styles.addressForm}>
      <div className={styles.addressForm__form}>
        <Formik
          enableReinitialize
          initialValues={{
            state,
            city,
            zipCode,
            address1,
            address2,
            country,
          }}
          validationSchema={validate}
          onSubmit={() => {
            handleSubmit(shipping);
          }}
        >
          {(formik) => (
            <Form>
              <ShippingInput name="address1" placeholder="Address 1" onChange={handleChange} />
              <ShippingInput name="address2" placeholder="Address 2" onChange={handleChange} />
              <div className={styles.addressForm__row}>
                <ShippingInput name="city" placeholder="*City" onChange={handleChange} />
                <ShippingInput name="state" placeholder="*State/Province" onChange={handleChange} />
              </div>
              <div className={styles.addressForm__row}>
                <ShippingInput name="zipCode" placeholder="*Post/Zip code" onChange={handleChange} />
                <SingularSelect
                  name="country"
                  value={country}
                  placeholder="*Country"
                  handleChange={handleChange}
                  data={countries}
                />
              </div>
              <button
                type="submit"
                className={`shadow-md px-1 py-2 text-sm font-bold bg-[#6176fe] w-24 text-[#fff] shadow-gray-500 transition delay-200  rounded-md  hover:bg-[#6176fe] hover:text-[#fff] `}
              >
                {role == "edit" ? "Update" : "Save"}
              </button>
            </Form>
          )}
        </Formik>
        <div className={styles.addressForm__overlay}></div>
      </div>
      <div className={styles.addressForm__close} onClick={() => closeForm()}>
        <RxCross1 />
      </div>
    </div>
  );
};
export default AddressForm;
