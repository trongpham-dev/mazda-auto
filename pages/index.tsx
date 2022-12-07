import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Car, { product_list } from "../data/type";
import Link from "next/link";
import HeadSeo from "../component/seo/HeadSeo";
import MetaData from "../data/meta";
import SliderImage, { sliderImages } from "../data/slider";

let metaData: MetaData = {
  title: "Mazda Bình Dương: Đại Lý Phân Phối Chính Thức Của Mazda",
  description:
    "Showroom chính hãng xe ôtô Mazda tại Bình Dương đầy đủ các dòng xe Mazda mới 2022, đăng ký báo giá xe Mazda và lái thử trực tiếp. | Mazda Bình Dương",
  canonicalUrl: "https://otomazdabinhduong.com/",
  ogType: "Website",
  ogImageUrl: "https://otomazdabinhduong.com/cx-5-ngoai-that.jpg",
};

interface Props {
  carList: Car[];
  sliderImages: SliderImage[];
}
export default function Home(props: Props) {
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
            {props.sliderImages?.map((item, key) => (
              <div className={styles.slide_image} key={key}>
                <Image
                  src={item.imgUrl}
                  width={1920}
                  height={700}
                  alt={item.alt}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.product_wrapper}>
          <div className={styles.product_inner}>
            <div className={styles.product_intro}>
              <h1 className={styles.intro_text}>CÁC DÒNG XE MAZDA</h1>
            </div>
            <div className={styles.product_list}>
              {props.carList.map((car) => (
                <div className={styles.product} key={car.productId}>
                  <div className={styles.product_image}>
                    <Link
                      href={`/o-to/${car.productId}`}
                      className={styles.product_link}
                      key={car.productId}
                      legacyBehavior
                    >
                      <a>
                        <Image
                          className={styles.image}
                          src={car.productImage}
                          width={380}
                          height={213}
                          alt={`Xe ${car.productName} 2022`}
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

export async function getStaticProps() {
  return {
    props: {
      carList: product_list,
      sliderImages: sliderImages,
    },
  };
}
