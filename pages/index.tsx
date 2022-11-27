import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Home.module.css";
import Slide1 from "../public/slide1.jpg";
import Image from "next/image";
import { product_list } from "../data/type";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.slide_wrapper}>
        <Carousel autoPlay={true} transitionTime={1000} showThumbs={false}>
          <div>
            <Image src={Slide1} alt="xe mazda" />
          </div>
          <div>
            <Image src={Slide1} alt="xe mazda" />
          </div>
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
  );
}
