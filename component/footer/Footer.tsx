import Image from "next/image";
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
        </div>
      </div>
      <div className={styles.footer_wrapper}>
        <footer className={styles.footer}>
          <div className={styles.col_wrapper}>
            <div className={styles.col_1}>
              <div className={styles.col_1_inner}>
                <div className={styles.text_1_wrapper}>
                  <h2 className={styles.text1}>MAZDA BÌNH DƯƠNG</h2>
                </div>
                <div className={styles.gap_1}></div>
                <div className={styles.text_2_wrapper}>
                  <p className={styles.text_2}>
                    Đ/C: 56/9 Đại lộ Bình Dương, Thuận Giao, Thuận An, Bình
                    Dương
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
                  <p className={styles.text_2}>Hotline: 087 858 4868</p>
                  <p className={styles.text_2}>
                    Email: nguyenminhbao1@thaco.com
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.col_3}>
              <div className={styles.col_3_inner}>
                <div className={styles.text_1_wrapper}>
                  <h2 className={styles.text1}>THEO DÕI CHÚNG TÔI</h2>
                </div>
                <div className={styles.gap_1}></div>
                <div className={styles.social_image_wrapper}>
                  <div className={styles.social_image}>
                    <a href="https://www.facebook.com/profile.php?id=100069266504823">
                      <Image
                        className={styles.fb_icon}
                        src="https://www.otomazdabinhduong.com/social/fb.png"
                        width={50}
                        height={50}
                        alt="Liên lạc với chúng tôi qua Facebook"
                      />
                    </a>
                  </div>
                  <div className={styles.social_image}>
                    <a href="https://zalo.me/0878584868">
                      <Image
                        src="https://www.otomazdabinhduong.com/zalo.png"
                        className={styles.zalo_icon}
                        width={50}
                        height={50}
                        alt="Liên lạc với chúng tôi qua Zalo"
                      />
                    </a>
                  </div>
                  <div className={styles.social_image}>
                    <a href="https://www.otomazdabinhduong.com">
                      <Image
                        src="https://www.otomazdabinhduong.com/social/youtube.png"
                        className={styles.insta_icon}
                        width={50}
                        height={50}
                        alt="Theo dõi chúng tôi qua Youtube"
                      />
                    </a>
                  </div>
                  <div className={styles.social_image}>
                    <a href="https://www.otomazdabinhduong.com">
                      <Image
                        src="https://www.otomazdabinhduong.com/social/twitter.png"
                        className={styles.insta_icon}
                        width={50}
                        height={50}
                        alt="Theo dõi chúng tôi qua Twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
