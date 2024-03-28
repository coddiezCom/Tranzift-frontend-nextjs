// import React Liabary
import React from "react";
// import MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
// import styles
import styles from "../../styles/gift-card.module.scss";
const Index = ({ card, selectedDeliveryOption, handleDeliveryOption, formik, handleformChange }) => {
  return (
    <>
      <Box
        component="form"
        className={styles.__cardForm}
        onSubmit={() => {
          handleSubmit();
        }}
      >
        {card?.price?.type == "FIXED" ? (
          <>
            <Typography
              component="p"
              sx={{ fontSize: "1em", margin: 0, padding: 0, fontWeight: "600", textAlign: "start" }}
              className={styles.__denominationFixed}
            >
              <span>Amount: </span>
              <span>
                {card.price.denomination &&
                  card?.price?.denomination?.map((item, index) => {
                    return (
                      <Button
                        variant="outlined"
                        className={styles.__denominationBtn}
                        sx={{ color: "gray", borderColor: "gray" }}
                        key={index}
                        onClick={() => {
                          handleformChange({ target: { name: "denomination", value: item } });
                        }}
                        name="fixedDenomination"
                      >
                        {`${card?.price?.currency?.symbol}  ${item}`}
                      </Button>
                    );
                  })}
              </span>
            </Typography>
          </>
        ) : (
          <>
            <CardContent sx={{ margin: 0, padding: 0 }} className={styles.__denominationVary}>
              <TextField
                sx={{ margin: 0, padding: 0 }}
                className={styles.__denominationInput}
                required
                id=" "
                type="number"
                name="denomination"
                label="Enter denomination"
                onChange={handleformChange}
                onBlur={formik.handleBlur}
                variant="standard"
                error={formik.touched.denomination && formik.errors.denomination}
                value={formik.values.denomination}
                helperText={`Min: ${card?.price?.min} Max: ${card?.price?.max}`}
                // onChange={handleChange}
              />
            </CardContent>
          </>
        )}
        <CardContent sx={{ margin: 0, padding: 0 }} className={styles.__quentity}>
          <TextField
            sx={{ margin: 0, padding: 0 }}
            className={styles.__quentityInput}
            required
            id=" "
            type="number"
            name="quantity"
            label="Quantity"
            defaultValue={1}
            onChange={handleformChange}
            onBlur={formik.handleBlur}
            variant="standard"
            value={formik.values.quantity}
            error={formik.touched.quantity && formik.errors.quantity}
            helperText={`Min: 1 Max: 10`}
            // onChange={handleChange}
          />
        </CardContent>

        <CardContent sx={{ margin: 0, padding: 0 }} className={styles.__deliveryOptions}>
          <FormLabel id="demo-controlled-radio-buttons-group">Delivery Options</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="demo-controlled-radio-buttons-group"
            value={selectedDeliveryOption}
            onChange={handleDeliveryOption}
          >
            <FormControlLabel value="send_as_Gift" control={<Radio color="warning" />} label="Send as Gift" />
            <FormControlLabel
              value="buy_for_Self"
              control={<Radio color="warning" />}
              label="Buy for Self (This E-gift card will be added to your account)"
            />
          </RadioGroup>
        </CardContent>
      </Box>
    </>
  );
};

export default Index;
