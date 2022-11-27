import { useRouter } from "next/router";
import { HTMLToReact } from "../../common/HtmlToReact";
import CarDetail, { detail } from "../../data/detail";
import styles from "../o-to/mazda.module.css";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

let parse = HTMLToReact;
let carDetail: CarDetail = {
  carId: "",
  carImage: [],
  carName: "",
  carPrice: "",
  carModel: [],
  description: { payload: "" },
};
export default function mazda() {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  carDetail = detail.filter((car) => car.carId === id)[0];
  return (
    <div className={styles.car_detail_wrapper}>
      <div className={styles.car_infor_wrapper}>
        <div className={styles.car_image}>
          <Carousel
            autoPlay
            axis="horizontal"
            infiniteLoop
            transitionTime={1000}
            renderThumbs={() =>
              carDetail?.carImage.map((imgUrl, key) => (
                <Image
                  src={imgUrl}
                  alt={carDetail.carName}
                  width={600}
                  height={338}
                />
              ))
            }
          >
            {carDetail?.carImage.map((imgUrl, key) => (
              <div key={key}>
                <Image
                  src={imgUrl}
                  alt={carDetail.carName}
                  width={600}
                  height={338}
                />
              </div>
            ))}
          </Carousel>
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
              <p>
                {car.modelName}
                <span>{car.modelPrice}</span>
              </p>
            ))}
            <p>
              <strong>– Khuyến mãi &amp; ưu đãi</strong>
              <br></br>
              <em>
                * Quý khách vui lòng liên hệ hotline tư vấn, nhận thông tin ưu
                đãi &amp; khuyễn mãi.
              </em>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.description_wrapper}></div>
    </div>
  );
}
