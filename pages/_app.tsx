import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../component/Layout/Layout";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // Google Tag Manager
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-PCHGNDD" });
  }, []);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
