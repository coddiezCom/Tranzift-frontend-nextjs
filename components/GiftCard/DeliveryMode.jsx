// import react Liabary
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import MUI Components
import FormControl from "@mui/material/FormControl";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import FormHelperText from "@mui/joy/FormHelperText";
// import styles
import styles from "../../styles/gift-card.module.scss";
import { SetToggleRegisterPopup } from "../../store/ToggleRegisterPopup";
const Index = ({ formik, handleformChange }) => {
  const [DeliveryMode, setDeliveryMode] = useState("Email");
  const dispatch = useDispatch();
  const handleDeliveryMode = (e) => {
    setDeliveryMode(e.target.value);
    formik.setFieldValue("reciver_email", "");
    formik.setFieldValue("reciver_phone_number", "");
    formik.setFieldTouched("reciver_email", false);
    formik.setFieldTouched("reciver_phone_number", false);
  };
  const { userDetail } = useSelector((state) => ({ ...state }));
  const showRegistration = (value) => {
    dispatch(SetToggleRegisterPopup(value));
  };
  return (
    <div className={styles.__deliveryModeContainer}>
      <div className={styles.__deliveryMode}>
        <div className={styles.__heading}>
          <h3>Delivery Mode</h3>
        </div>
        <div className={styles.__content}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={DeliveryMode}
              onChange={handleDeliveryMode}
            >
              <FormControlLabel value="Email" control={<Radio color="warning" />} label="Email" />
              <FormControlLabel value="SMS" control={<Radio color="warning" />} label="SMS" />
              <FormControlLabel value="Both" control={<Radio color="warning" />} label="Both" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.__giftingDetails}>
          <div className={styles.__heading}>
            <h3>Gifting Details</h3>
          </div>
          <div className={styles.__form}>
            <CardContent sx={{ margin: 0, padding: 0 }} className={styles.__reciver_name}>
              <TextField
                sx={{ margin: 0, padding: 0 }}
                className={styles.__reciver_name_input}
                required
                id=" "
                type="text"
                value={formik.values.reciver_name}
                name="reciver_name"
                label="Receiver Name"
                onChange={handleformChange}
                onBlur={formik.handleBlur}
                error={formik.touched.reciver_name && Boolean(formik.errors.reciver_name)}
                helperText={formik.touched.reciver_name && formik.errors.reciver_name}
                variant="standard"
              />
            </CardContent>
            {(DeliveryMode == "Email" || DeliveryMode == "Both") && (
              <CardContent sx={{ margin: 0, padding: 0 }} className={styles.__reciver_email}>
                <TextField
                  sx={{ margin: 0, padding: 0 }}
                  className={styles.__reciver_email_input}
                  required
                  id=" "
                  value={formik.values.reciver_email}
                  type="email"
                  name="reciver_email"
                  label="Receiver Email"
                  onChange={handleformChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.reciver_email && Boolean(formik.errors.reciver_email)}
                  helperText={formik.touched.reciver_email && formik.errors.reciver_email}
                  variant="standard"
                  // helperText={`Will be delivered to this id via Email`}
                />
              </CardContent>
            )}
            {(DeliveryMode == "SMS" || DeliveryMode == "Both") && (
              <CardContent
                sx={{
                  margin: 0,
                  padding: 0,
                }}
                className={styles.__reciver_number}
              >
                <TextField
                  sx={{ margin: 0, padding: 0 }}
                  className={styles.__reciver_number_input}
                  required
                  id=" "
                  type="number"
                  name="reciver_phone_number"
                  label="Receiver's Mobile Number"
                  onChange={handleformChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.reciver_phone_number && Boolean(formik.errors.reciver_phone_number)}
                  helperText={formik.touched.reciver_phone_number && formik.errors.reciver_phone_number}
                  variant="standard"
                  value={formik.values.reciver_phone_number}
                  // helperText={`Will be delivered to this number via SMS`}
                />
              </CardContent>
            )}
            {(DeliveryMode == "Email" || DeliveryMode == "SMS") && (
              <CardContent
                className={styles.__empty}
                sx={{ margin: 0, padding: 0, visibility: "hidden" }}
              ></CardContent>
            )}
            <CardContent sx={{ margin: 0, padding: 0 }} className={styles.__reciver_message}>
              <Textarea
                className={styles.__reciver_message_input}
                aria-label="minimum height"
                name="reciver_message"
                value={formik.values.reciver_message}
                maxRows={2}
                minRows={2}
                placeholder="Message for Receiver"
                variant="standard"
                onChange={handleformChange}
                onBlur={formik.handleBlur}
                error={formik.touched.reciver_message && Boolean(formik.errors.reciver_message)}
                helperText={formik.touched.reciver_message && formik.errors.reciver_message}
              />
              <FormHelperText>{formik.touched.reciver_message && formik.errors.reciver_message}</FormHelperText>
            </CardContent>
            <div>
              {userDetail?.token ? (
                <button
                  type="submit"
                  className={`${styles.__submit} transition hover:scale-105 ease-in-out duration-700 `}
                >
                  Proceed to checkout
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => showRegistration(true)}
                  className={`${styles.__submit} transition hover:scale-105 ease-in-out duration-700 `}
                >
                  Proceed to checkout (SignIn required)
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Index;
