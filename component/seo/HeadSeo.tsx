import Head from "next/head";
import MetaData from "../../data/meta";
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
      <link
        rel="icon"
        type="image/jpg"
        href="https://main.d28u7m8fcyk6b7.amplifyapp.com/mazda-logo.jpg"
      />
      <link rel="canonical" href={props.canonicalUrl} />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={props.description} />
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
