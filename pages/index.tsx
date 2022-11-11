import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Home.module.css";
import Slide1 from "../public/slide1.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <Carousel>
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
          <h1>Product info</h1>
        </div>
      </div>
    </div>
  );
}
