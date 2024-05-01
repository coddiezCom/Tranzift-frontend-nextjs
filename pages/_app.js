// import "@/styles/globals.scss";
import "../styles/global.scss";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import store from "../store";
import Header from "../layout/header";
import Footer from "../layout/footer";
let persistor = persistStore(store);
export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [progress, setProgress] = useState(0);
  const [isFooterIsVisible, setIsFooterIsVisible] = useState(false);
  const [isHeaderIsVisible, setIsHeaderIsVisible] = useState(false);
  const [reload, setReload] = useState(false);
  const router = useRouter();
  // console.log(router.isReady);
  useEffect(() => {
    if (router.asPath === "/") {
      setReload(true);
    }
    // setReload(router.isReady);
    // top Loading Bar
    router.events.on("routeChangeStart", () => {
      // setReload(true);
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
      // setReload(false);
    });

    setReload(false);
  }, []);

  // Check if the current route is '/browse'
  const isBrowsePage = router.pathname === "/browse";
  const isCartPage = router.pathname === "/cart";
  const isAdmin = router.pathname.includes("/admin");
  const isPaymentPage = router.pathname.includes("/payment_status");
  const isProfilePage = router.pathname.includes("/profile");
  const is404Page = router.pathname === "/404";

  useEffect(() => {
    if (!isPaymentPage && !isBrowsePage && !isAdmin) {
      setIsFooterIsVisible(true);
      setIsHeaderIsVisible(true);
    } else {
      setIsFooterIsVisible(false);
      setIsHeaderIsVisible(false);
    }
  }, [isAdmin, isBrowsePage, isPaymentPage, isProfilePage]);

  return (
    <>
      <LoadingBar
        color="#000000"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={500}
        height={4}
      />
      <Head>
        <title>tranzift</title>
        <meta name="description" content="Tranzift  online shopping service for all of your needs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          {isHeaderIsVisible && <Header />}
          <Component {...pageProps} />
          {isFooterIsVisible && <Footer />}
        </PersistGate>
      </Provider>
    </>
  );
}
