import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import apiHelper from "../../utils/apiHelper";
import PulseLoader from "react-spinners/PulseLoader";
import GiftCard from "../../components/GiftCard/GiftCard";
import GiftCardBanner from "../../components/GiftCard/GiftCardBanner";
import CategorySelection from "../../components/GiftCard/CategorySelection";

import styles from "../../styles/gift-card.module.scss";

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

const Index = ({ woohooGiftsCardCategories, error, skuData }) => {
  const [displayedCards, setDisplayedCards] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 20; // Number of cards to load per page

  useEffect(() => {
    setDisplayedCards(skuData.slice(0, pageSize));
    setHasMore(skuData.length > pageSize);
  }, [skuData]);

  const fetchMoreData = () => {
    setTimeout(() => {
      const nextBatch = skuData.slice(displayedCards.length, displayedCards.length + pageSize);

      if (nextBatch.length === 0) {
        setHasMore(false);
      }
      setDisplayedCards([...displayedCards, ...nextBatch]);
    }, 1500);
  };
  const banner = {
    laptop_img: "/images/banner/gift_card_banner.jpg",
    tablet_img: "/images/banner/gift_card_banner_Tablet.jpg",
  };

  return (
    <>
      <div className={`${styles.__giftCardContainer} `}>
        <GiftCardBanner banner={banner} />
        <div className={styles.__GiftCardSearch}>
          <CategorySelection categories={woohooGiftsCardCategories} />
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
        woohooGiftsCardCategories: null,
        skuData: null,
      },
    };
  }
}

const getWoohooGiftCards = async (isActive, sort, minPrice, fields, page, limit) => {
  const baseUrl = "giftcards/allCards";
  const data = {
    isActive: isActive,
    sort: sort,
    fields: fields,
    page: page,
    limit: limit,
  };

  try {
    const searchResult = await apiHelper(baseUrl, data, "GET", null);
    return searchResult;
  } catch (error) {
    return "error";
  }
};

const getWoohooGiftCardsCategories = async () => {
  const baseUrl = "categories/get-all-category";
  try {
    const searchResult = await apiHelper(baseUrl);
    return searchResult;
  } catch (error) {
    return "error";
  }
};

const getGiftCardDetailsByCategoryId = async (id) => {
  const baseUrl = `categories/get-category/${id}`;
  try {
    const searchResult = await apiHelper(baseUrl);
    return searchResult.includedProducts;
  } catch (error) {
    return "error";
  }
};
