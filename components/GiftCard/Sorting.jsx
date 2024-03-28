import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Select from "react-select";
const Index = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const options = [
    {
      value: "Default_Sorting",
      label: "Default Sorting",
    },
    {
      value: "Sort_by_popularity",
      label: "Sort by popularity",
    },
    {
      value: "Sort_by_new_arrivals",
      label: "Sort by new arrivals",
    },
    {
      value: "Sort_by_price_low_to_high",
      label: "Sort by price: low to high",
    },
    {
      value: "Sort_by_price_high_to_low",
      label: "Sort by price: high to low",
    },
  ];
  const changeHandler = (value) => {
    // Check if 'sorting' parameter already exists in router.query
    const sortingExists = router.query ? (router.query.sorting ? router.query.sorting : value.value) : "";
    // update the'sorting' parameter with the new value
    const updatedSorting = sortingExists ? value.value : "";
    // Create a new query string with the updated'sorting' parameter
    const updatedQuery = {
      ...router.query,
      sorting: updatedSorting,
    };

    // Convert the updated query object to a string
    const updatedQueryString = `?${new URLSearchParams(updatedQuery).toString()}`;
    // Check if 'category' parameter already exists in router.query
    const existingCategory = router.query
      ? router.query.selectedCategories
        ? router.query.selectedCategories
        : value.value
      : "";
    // Construct the final PageUrl with the updated query string
    const PageUrl = `/gift-card${updatedQueryString}`;

    // Set the new value
    setValue(value);
    // Push the updated URL to the router
    router.push(PageUrl);
  };
  return (
    <span className={`flex flex-row justify-end `}>
      <Select
        options={options}
        placeholder={"Default Sorting"}
        value={value}
        className={`w-56 `}
        onChange={changeHandler}
      />
    </span>
  );
};

export default Index;
