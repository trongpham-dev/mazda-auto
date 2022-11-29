import styles from "../footer/Footer.module.css";
export default function Footer() {
  return (
    <>
      <div className={styles.contact_discount}>
        <div className={styles.col_gap}></div>
        <div className={styles.row_middle}>
          <div className={styles.col_left}>
            <div className={styles.col_left_inner}>
              <h2 className={styles.title}>ƯU ĐÃI &amp; KHUYẾN MÃI</h2>
              <div className={styles.gap_element}></div>
              <div className={styles.text_wrapper}>
                <p className={styles.text}>
                  Quà tặng dành cho khách hàng gửi yêu cầu báo giá Online.
                  <br></br>
                  <em>
                    * Quý khách vui lòng liên hệ hotline tư vấn, nhận thông tin
                    ưu đãi và khuyễn mãi.
                  </em>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.col_right}>
            <div className={styles.col_right_inner}>
              <div className={styles.col_right_gap}></div>
              <a href="tel:0333399053" className={styles.phone}>
                <span className={styles.phone_content}>
                  Hotline: 033.339.9053
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
}
