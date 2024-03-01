import { useRouter } from "next/router";
import React, { useEffect } from "react";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /recharge/prepaid-recharge
    router.push("/recharge/prepaid-recharge");
  }, [router]);

  return null; // Return null or any other content as needed
};

export default index;
