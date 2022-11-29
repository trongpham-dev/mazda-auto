import { Html } from "next/document";
import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children, ...props }: Props) {
  return (
    <>
      <Html lang="en-us">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" type="image/jpg" href="/mazda-logo.jpg" />
          <meta name="robots" content="index, follow" />
        </Head>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </Html>
    </>
  );
}
