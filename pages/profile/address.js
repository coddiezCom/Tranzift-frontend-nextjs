// import components
import Layout from "../../components/profile/layout";
import Shipping from "../../components/checkout/shipping";
import styles from "../../styles/profile.module.scss";
// import react liabary
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAddress } from "../../requests/user";
export default function Index({ tab }) {
  const { userDetail } = useSelector((state) => ({ ...state }));
  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    const fetchAddresses = async (userId) => {
      try {
        // Assuming getAddresses is an async function to fetch addresses
        const addresses = await getAddress(userId);
        return addresses.addresses;
      } catch (error) {
        console.log("[ADDRESS_PAGE]", error);
        setAddresses([]);
        return [];
      }
    };

    const loadAddresses = async () => {
      try {
        const addresses = await fetchAddresses(userDetail?.user_id);
        setAddresses(addresses);
      } catch (error) {
        console.error("Error fetching addresses:", error);
        setAddresses([]);
      }
    };

    loadAddresses();
  }, [userDetail?.user_id]);

  return (
    <Layout session={userDetail} tab={tab}>
      <Shipping user={userDetail} addresses={addresses} setAddresses={setAddresses} profile />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const { query, req } = ctx;
  const tab = query.tab || 0;
  return {
    props: {
      tab,
    },
  };
}
