import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { product_list } from "../data/type";
import Link from "next/link";
import HeadSeo from "../component/seo/HeadSeo";
import MetaData from "../data/meta";
import SliderImage from "../data/slider";

let metaData: MetaData = {
  title: "Mazda Bình Dương",
  description: "Xe mazda tại bình dương giá tốt",
  canonicalUrl: "https://main.d28u7m8fcyk6b7.amplifyapp.com",
  ogType: "Website",
  ogImageUrl: "https://main.d28u7m8fcyk6b7.amplifyapp.com/cx-5-ngoai-that.jpg",
};

let sliderImages: SliderImage[] = [
  {
    imgUrl: "/slide1.jpg",
    alt: "MAZDA CX-5 2022",
  },
  {
    imgUrl: "/slide1.jpg",
    alt: "MAZDA CX-30 2022",
  },
  // {
  //   imgUrl: "/slide/mazda-2.jpg",
  //   alt: "MAZDA 2 2022",
  // },
  // {
  //   imgUrl: "/slide/mazda-3.jpg",
  //   alt: "MAZDA 3 2022",
  // },
  // {
  //   imgUrl: "/slide/mazda-6.jpg",
  //   alt: "MAZDA 6 2022",
  // },
];
export default function Home() {
  return (
    <>
      <HeadSeo
        title={metaData.title}
        description={metaData.description}
        canonicalUrl={metaData.canonicalUrl}
        ogType={metaData.ogType}
        ogImageUrl={metaData.ogImageUrl}
      />
      <div className={styles.container}>
        <div className={styles.slide_wrapper}>
          <Carousel
            autoPlay
            axis="horizontal"
            infiniteLoop
            transitionTime={1000}
            showThumbs={false}
          >
            {sliderImages?.map((item, key) => (
              <div className={styles.slide_image} key={key}>
                <Image
                  src={item.imgUrl}
                  width={1920}
                  height={540}
                  alt={item.alt}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.product_wrapper}>
          <div className={styles.product_inner}>
            <div className={styles.product_intro}>
              <h2 className={styles.intro_text}>CÁC DÒNG XE MAZDA</h2>
            </div>
            <div className={styles.product_list}>
              {product_list.map((car) => (
                <div className={styles.product} key={car.productId}>
                  <div className={styles.product_image}>
                    <Link
                      href={{
                        pathname: "/o-to/mazda",
                        query: { id: car.productId },
                      }}
                      className={styles.product_link}
                      key={car.productId}
                      legacyBehavior
                    >
                      <a>
                        <Image
                          src={car.productImage}
                          width={800}
                          height={450}
                          alt={car.productName}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className={styles.product_info}>
                    <h4 className={styles.product_name}> {car.productName}</h4>
                    <p className={styles.product_price}>
                      Giá từ: {car.productPrice}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
