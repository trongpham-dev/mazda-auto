import { useRouter } from "next/router";
import CarDetail, { detail } from "../../data/detail";
import "react-image-gallery/styles/css/image-gallery.css";
import React, { useEffect, useState } from "react";
import styles from "../o-to/mazda.module.css";
import ImageGallery from "react-image-gallery";

export default function Mazda() {
  const router = useRouter();

  const [carDetail, setCarDetail] = useState<CarDetail>({
    carId: "",
    carImage: [],
    carName: "",
    carPrice: "",
    carModel: [],
    carVideo: "",
    description: () => <h1></h1>,
  });

  const [screenSize, setScreenSize] = useState(1920);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
    if (router.isReady) {
      const {
        query: { id },
      } = router;

      let carInfor: CarDetail = detail.filter((car) => car.carId === id)[0];
      setCarDetail(carInfor);
    }
  }, [carDetail, router.isReady, screenSize]);
  return carDetail ? (
    renderDetail(carDetail, screenSize)
  ) : (
    <h1>Content Not Found</h1>
  );
}

function renderDetail(carDetail: CarDetail, screenSize: number) {
  return (
    <div className={styles.car_detail}>
      <div className={styles.car_detail_wrapper}>
        <div className={styles.car_infor_wrapper}>
          <div className={styles.car_image}>
            <ImageGallery
              thumbnailPosition={screenSize < 768 ? "left" : "bottom"}
              items={carDetail.carImage}
              showNav={false}
            />
          </div>
          <div className={styles.car_infor}>
            <h2 className={styles.car_name}>{carDetail.carName}</h2>
            <div className={styles.divider}></div>
            <div className={styles.price_wrapper}>
              <p className={styles.car_price}>
                <span className={styles.amount}>{carDetail.carPrice}</span>
              </p>
            </div>
            <div className={styles.car_short_description}>
              <h4 className={styles.car_model_price}>Giá xe New Mazda CX-5</h4>
              {carDetail.carModel.map((car) => (
                <p className={styles.model_name} key={car.modelName}>
                  {car.modelName}
                  <span className={styles.model_price}>{car.modelPrice}</span>
                </p>
              ))}
              <p className={styles.discount_infor}>
                <strong>– Khuyến mãi &amp; ưu đãi</strong>
                <br></br>
                <em>
                  * Quý khách vui lòng liên hệ hotline tư vấn, nhận thông tin ưu
                  đãi &amp; khuyễn mãi.
                </em>
              </p>
              <div className={styles.contact_infor}>
                <a
                  rel="nofollow"
                  href="tel:0393399053"
                  target="_self"
                  className={styles.phone}
                >
                  <span>039.339.9053</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {carDetail.description()}
      </div>
    </div>
  );
}
