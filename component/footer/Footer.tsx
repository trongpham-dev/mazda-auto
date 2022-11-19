import styles from "../footer/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_inner_wrapper}>
        <footer className={styles.footer}>
          <div className={styles.col_wrapper}>
            <div className={styles.col_1}>
              <div className={styles.col_1_inner}>
                <div className={styles.text_1_wrapper}>
                  <h2 className={styles.text1}>MAZDA VIỆT NAM </h2>
                </div>
                <div className={styles.gap_1}></div>
                <div className={styles.text_2_wrapper}>
                  <p className={styles.text_2}>
                    Công ty CP một thành viên Mazda Việt Nam, nhà phân phối Ủy
                    quyền của Mazda tại Việt Nam.
                  </p>
                </div>
                <div className={styles.gap_2}></div>
              </div>
            </div>
            <div className={styles.col_2}>
              <div className={styles.col_2_inner}>
                <div className={styles.text_1_wrapper}>
                  <h2 className={styles.text1}>HỖ TRỢ KHÁCH HÀNG</h2>
                </div>
                <div className={styles.gap_1}></div>
                <div className={styles.text_2_wrapper}>
                  <p className={styles.text_2}>Hotline: 033 339 9053</p>
                  <p className={styles.text_2}>
                    Email: trongdeptraivailol@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
