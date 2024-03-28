// import react liabrary
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import Select from "react-select";
// import styles
import styles from "../../styles/gift-card.module.scss";
// MUI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Index = ({ categories }) => {
  const router = useRouter();
  const selectedCategory = router.query.selectedCategories;
  const [value, setValue] = useState(selectedCategory);
  useEffect(() => {
    // Update the state value when the URL changes
    if (selectedCategory) {
      setValue(selectedCategory);
    }
  }, [selectedCategory]); // Run this effect whenever selectedCategory changes

  let options = [
    {
      value: "All",
      label: "All Gift Cards",
    },
  ];
  options = options.concat(
    categories?.map((category) => ({
      value: category._id,
      label: category.categoryName,
    }))
  );
  const changeHandler = (value) => {
    // Check if 'category' parameter already exists in router.query
    const existingCategory = router.query
      ? router.query.selectedCategories
        ? router.query.selectedCategories
        : value
      : "";
    // update the 'category' parameter with the new value
    const updatedCategory = existingCategory ? value : "";
    // Create a new query string with the updated 'country' parameter
    const updatedQuery = {
      ...router.query,
      selectedCategories: updatedCategory,
    };

    // Convert the updated query object to a string
    const updatedQueryString = `?${new URLSearchParams(updatedQuery).toString()}`;

    // Construct the final PageUrl with the updated query string
    const PageUrl = `/gift-cards${updatedQueryString}`;
    // Set the new value
    setValue(value);
    // Push the updated URL to the router
    router.push(PageUrl);
  };

  return (
    <span className={`flex flex-row justify-end `}>
      {/* <Select
        options={options}
        placeholder={"Select Category"}
        value={value}
        className={`w-56 ${styles.___CategoriesSelection} `}
        onChange={changeHandler}
      /> */}
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Select Category</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={value}
          label="Select Category"
          className={`w-56 ${styles.___CategoriesSelection} `}
          onChange={(e) => changeHandler(e?.target?.value)}
        >
          {options?.map((item, index) => {
            return (
              <MenuItem key={index} value={item?.value}>
                {item?.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </span>
  );
};

export default Index;
