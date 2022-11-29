import Head from "next/head";
import siteMetadata from "../../data/siteMetadata";
const HeadSeo = ({
  title,
  description,
  canonicalUrl,
  ogTwitterImage,
  ogType,
  ogImageUrl,
}: {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTwitterImage: string;
  ogType: string;
  ogImageUrl: string;
}) => {
  return (
    <Head>
      //basic metadata
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      //twitter metadata
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogTwitterImage} />
      //canonical link
      <link rel="canonical" href={canonicalUrl} />
      //open graph metadata
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteMetadata.companyName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
    </Head>
  );
};

export default HeadSeo;
