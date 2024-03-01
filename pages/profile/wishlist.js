import React, { useEffect, useState } from "react";
import styles from "@/styles/wishlist.module.scss";
import WishlistCard from "@/components/wishlist/WishlistCard";
// import Product from "@/models/Product";
import db from "@/utils/db";
import axios from "axios";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import ProductCard from "@/components/productCard";
// import { redirect } from 'next/dist/server/api-utils';

const getwishlistProduct = async (userId) => {};
const wishlist = ({data}) => {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  
  
  // console.log(wishlistProducts ,"wishlistProducts")
  const { data: session } = useSession();
  // console.log(session?.token)
  useEffect(() => {
    const fetchProduct = async() =>{
      if (!session) {
        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }
      try {
        const user_id = await session?.user?.id;
        const baseUrl = "http://localhost:3000/api/user/wishlist";
        const wishlistParams = {
          user_id: user_id,
        };
        const wishlistResponse = await axios.get(baseUrl, {
          params: wishlistParams,
        });
    
        if (wishlistResponse.status === 200) {
          setWishlistProducts(wishlistResponse.data.products)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchProduct()
  }, [session])
  return (
    <div className={styles.__container}>
      <div className={styles.__header}>
        <h2>My wishlist</h2>
      </div>
      <div className={styles.__cards}>
        {wishlistProducts?.map((item,index)=>{
          return <WishlistCard product={item} key={item._id} /> 
        })
        }
      </div>
    </div>
  );
};

export default wishlist;
export async function getServerSideProps(context) {
  const session = await getSession(context);
  let wishlistProducts = [];
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  try {
    const user_id = await session?.user?.id;
    const baseUrl = "http://localhost:3000/api/user/wishlist";
    const wishlistParams = {
      user_id: user_id,
    };
    const wishlistHeader = {
      authorization:`Bearer ${session?.accessToken}`
    }
    const wishlistResponse = await axios.get(baseUrl, {
      params: wishlistParams,
    });

    if (wishlistResponse.status === 200) {
      wishlistProducts = wishlistResponse.data.products;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
 

  return {
    props: {
      data:session?.user?.id,
      wishlistProducts, // Use the fetched wishlist data
    },
  };
}
