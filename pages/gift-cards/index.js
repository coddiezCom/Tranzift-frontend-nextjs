// import react liabary
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/gift-card.module.scss";
// import Infinite Scroll
import InfiniteScroll from "react-infinite-scroll-component";
// import api helper
import apiHelper from "../../utils/apiHelper";
// import loader
import PulseLoader from "react-spinners/PulseLoader";
// import components
import GiftCard from "../../components/GiftCard/GiftCard";
import GiftCardBanner from "../../components/GiftCard/GiftCardBanner";
import CategorySelection from "../../components/GiftCard/CategorySelection";
// import Sorting from "@/components/GiftCard/Sorting";
import SearchBar from "../../components/GiftCard/SearchBar";

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
          <div key={index} className={`${styles.__giftCard}   `}>
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
  console.log(skuData, "sku");
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
          {/* <SearchBar cards={woohooGiftsCard} /> */}
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

    return {
      props: {
        error: null,
        woohooGiftsCard: woohooGiftsCards,
        woohooGiftsCardCategories: getWoohooGiftCardsCategory.data,
        skuData: woohooGiftsCards,
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
