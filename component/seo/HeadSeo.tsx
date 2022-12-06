import Head from "next/head";
import siteMetadata from "../../data/siteMetadata";
type Props = {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: string;
  ogImageUrl: string;
};
const HeadSeo = (props: Props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <link
        rel="icon"
        type="image/jpg"
        href="https://www.otomazdabinhduong.com/mazda.jpg"
      />
      <link rel="canonical" href={props.canonicalUrl} />
      <meta
        name="google-site-verification"
        content="tqx3awFTGh0z5At1w5kJOkq2cHozspOpWikZEmM9r6U"
      />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={props.description} />
      <meta
        name="keywords"
        content="Mazda 2, Mazda 3, Mazda 6, Mazda CX3, Mazda CX-30, Mazda CX5, Mazda CX8, MAZDA BT-50"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteMetadata.companyName} />
      <meta property="og:type" content={props.ogType} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.ogImageUrl} />
      <meta property="og:url" content={props.canonicalUrl} />
    </Head>
  );
};

export default HeadSeo;
