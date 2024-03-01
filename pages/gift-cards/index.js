import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "../../styles/gift-card.module.scss";
import { useRouter } from "next/router";
import Select from "react-select";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import apiHelper from "@/utils/apiHelper";
import PulseLoader from "react-spinners/PulseLoader";

export const GiftCard = ({ card }) => {
  const router = useRouter();
  const handleBuyNow = (productId) => {
    router.push(`/gift-cards/${productId}`);
  };
  const ourCard = card.GCDetails;
  return (
    <>
      <Card sx={{ width: 345 }} className={`${styles.gift_card}`} onClick={() => handleBuyNow(ourCard.sku)}>
        <div className={`${styles.gift_card__imageContainer}`}>
          {ourCard?.discountPercentage > 0 && (
            <span className={`${styles.gift_card__discount}`}>
              <span className={`${styles.gift_card__discount__img}`}>
                <Image src={"/images/icons/offerImg.png"} width={500} height={500} alt="discount" />
              </span>
              <span className={`${styles.gift_card__discount__text}`}>Off {ourCard?.discountPercentage} %</span>
            </span>
          )}
          <CardMedia
            component="img"
            alt={card?.nameOnWoohoo}
            className={`${styles.gift_card__img}`}
            height="140"
            image={ourCard.productImgWeb ? ourCard.productImgWeb : "/images/gift_card/Fastrack_E-Gift_Card_dtp.jpg"}
          />
        </div>
        <CardContent className={`${styles.gift_card__content}`}>
          <Typography className={`${styles.gift_card__name__nd_valid}`} gutterBottom variant="h6" component="div">
            <span>{ourCard?.nameOnWoohoo.substr(0, 40) + ".."}</span>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
export const GiftCardBanner = () => {
  return (
    <div className={styles.giftCardBanner}>
      <span className={styles.giftCardBanner__img}>
        <Image width={1200} height={1200} src="/images/banner/gift_card_banner.jpg" alt="Gift Card Banner" />
      </span>
      <span className={styles.giftCardBanner__content}>
        <span className={styles.giftCardBanner__content__heading}>
          <h3>Gift Cards</h3>
        </span>
        <span className={styles.giftCardBanner__content__subHeading}>
          <span>
            <Link href={"/"}>Home</Link>
          </span>
          <span>-</span>
          <span>Gift Cards</span>
        </span>
      </span>
    </div>
  );
};
export const CategorySelection = ({ categories }) => {
  const router = useRouter();
  const selectedCategory = router.query.selectedCategories;
  const [value, setValue] = useState(selectedCategory);

  let options = [
    {
      value: "All",
      label: "All Gift Cards",
    },
  ];
  options = options.concat(
    categories.map((category) => ({
      value: category._id,
      label: category.categoryName,
    }))
  );
  const changeHandler = (value) => {
    // Check if 'category' parameter already exists in router.query
    const existingCategory = router.query
      ? router.query.selectedCategories
        ? router.query.selectedCategories
        : value.value
      : "";
    // update the 'category' parameter with the new value
    const updatedCategory = existingCategory ? value.value : "";
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
      <Select
        options={options}
        placeholder={"Select Category"}
        value={value}
        className={`w-56 ${styles.___CategoriesSelection} `}
        onChange={changeHandler}
      />
    </span>
  );
};
export const Sorting = () => {
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
const SkeletonLoader = () => {
  return (
    <div className="w-full flex justify-center pb-3">
      <PulseLoader color="#2681fc" />
    </div>
  );
};
const GiftCardList = ({ cards }) => {
  return (
    <div className={styles.__giftCards}>
      {cards.map((card, index) => {
        return (
          <div key={index} className={styles.__giftCard}>
            <GiftCard card={card} />
          </div>
        );
      })}
    </div>
  );
};
const Index = ({ woohooGiftsCard, woohooGiftsCardCategories, error, skuData }) => {
  const router = useRouter();
  const [displayedCards, setDisplayedCards] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 20; // Number of cards to load per page

  useEffect(() => {
    // Update displayedCards when woohooGiftsCard prop changes
    setDisplayedCards(skuData.slice(0, pageSize));
    setHasMore(skuData.length > pageSize);
  }, [skuData]);

  const fetchMoreData = () => {
    setTimeout(() => {
      // Simulate fetching more data. In a real application, you would fetch data from an API.
      const nextBatch = skuData.slice(displayedCards.length, displayedCards.length + pageSize);

      // If there are no more cards to load, set hasMore to false
      if (nextBatch.length === 0) {
        setHasMore(false);
      }
      setDisplayedCards([...displayedCards, ...nextBatch]);
    }, 1500);
  };

  return (
    <>
      <div className={`${styles.__giftCardContainer} `}>
        <GiftCardBanner />
        <div className={styles.__GiftCardSearch}>
          <CategorySelection categories={woohooGiftsCardCategories} />
          {/* <Sorting /> */}
        </div>
        <div className={`${styles.__giftCards} ${styles.__giftCardsContainer}`}>
          <InfiniteScroll
            dataLength={displayedCards.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<SkeletonLoader />} // Replace with your skeleton loader component
          >
            <GiftCardList cards={displayedCards} />
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};
export default Index;
export async function getServerSideProps(context) {
  try {
    const { query } = context;
    const selectedCategories = query.selectedCategories || null;

    const isActive = true;
    const sort = "";
    const minPrice = 0;
    const fields = "";
    const page = 1;
    const limit = 300;

    let woohooGiftsCards;

    if (selectedCategories && selectedCategories !== "All") {
      woohooGiftsCards = await getGiftCardDetailsByCategoryId(selectedCategories);
    } else {
      const getWoohooGiftCard = await getWoohooGiftCards(isActive, sort, minPrice, fields, page, limit);
      woohooGiftsCards = getWoohooGiftCard.giftCards;
    }

    const getWoohooGiftCardsCategory = await getWoohooGiftCardsCategories();
    // const skuData = await woohooGiftsCards.map((item) => ({ nameOnWoohoo: item.nameOnWoohoo, sku: item.sku }));
    // const skuData = woohooGiftsCards.map((item) => ({ nameOnWoohoo: item.nameOnWoohoo, sku: item.sku }));
    const GiftCardArr = [];
    for (let i = 0; i < woohooGiftsCards.length; i++) {
      const giftCard = await getGiftCardDetailsUsingSku(woohooGiftsCards[i].sku);
      GiftCardArr.push(giftCard);
    }
    return {
      props: {
        error: null,
        woohooGiftsCard: woohooGiftsCards,
        woohooGiftsCardCategories: getWoohooGiftCardsCategory.data,
        skuData: GiftCardArr,
      },
    };
  } catch (error) {
    return {
      props: {
        error: {
          message: error.message || "An error occurred",
        },
        woohooGiftsCard: null,
        woohooGiftsCardCategories: null,
        skuData: null,
      },
    };
  }
}
const getWoohooGiftCards = async (isActive, sort, minPrice, fields, page, limit) => {
  const baseUrl = "giftcards/allCards";
  try {
    // const searchResult = await axios.get(baseUrl);
    const searchResult = await apiHelper(
      baseUrl,
      {
        isActive: isActive,
        sort: sort,
        // minPrice: minPrice,
        fields: fields,
        page: page,
        limit: limit,
      },
      "GET",
      null
    );
    return searchResult;
  } catch (error) {
    console.error("Error fetching gift cards:", error);
    return "error";
  }
};
const getWoohooGiftCardsCategories = async () => {
  const baseUrl = "categories/get-all-category";
  try {
    // const searchResult = await axios.get(baseUrl);
    const searchResult = await apiHelper(baseUrl);
    return searchResult;
  } catch (error) {
    console.error("Error fetching gift cards:", error);
    return "error";
  }
};
const getGiftCardDetailsByCategoryId = async (id) => {
  const baseUrl = `categories/get-category/${id}`;
  try {
    // const searchResult = await axios.get(baseUrl);
    const searchResult = await apiHelper(baseUrl);
    return searchResult.includedProducts;
  } catch (error) {
    console.error("Error fetching gift cards:", error);
    return "error";
  }
};
const getGiftCardDetailsUsingSku = async (sku) => {
  try {
    const baseUrl = `giftcards/gcdetails/${sku}`;
    const giftCardDetails = await apiHelper(baseUrl);
    return giftCardDetails;
  } catch (error) {
    return error;
  }
};
