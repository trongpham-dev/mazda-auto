import Image from "next/image";
import styles from "./SidebarContact.module.css";
export default function SidebarContact() {
  return (
    <div className={styles.button_contact}>
      <div className={styles.contact_vr}>
        <div
          className={`${styles.zalo_vr_circle_fill} ${styles.vr_circle_fill_first}`}
        ></div>
        <div
          className={`${styles.zalo_vr_circle_fill} ${styles.vr_circle_fill_second}`}
        ></div>
        <div
          className={`${styles.zalo_vr_circle_fill} ${styles.vr_circle_fill_third}`}
        ></div>
        <div className={styles.zalo_vr_img_circle}>
          <a
            className={styles.link}
            target="_blank"
            href="https://zalo.me/0333399053"
          >
            <Image
              className={styles.image}
              src="/zalo.png"
              width={25}
              height={27}
              alt="ZALO MAZDA BÌNH DƯƠNG"
            />
          </a>
        </div>
      </div>
      <div className={styles.contact_vr}>
        <div
          className={`${styles.phone_vr_circle_fill} ${styles.vr_circle_fill_first}`}
        ></div>
        <div
          className={`${styles.phone_vr_circle_fill} ${styles.vr_circle_fill_second}`}
        ></div>
        <div
          className={`${styles.phone_vr_circle_fill} ${styles.vr_circle_fill_third}`}
        ></div>
        <div className={styles.phone_vr_img_circle}>
          <a
            className={styles.link}
            target="_blank"
            href="https://zalo.me/0333399053"
          >
            <Image
              className={styles.image}
              src="/phone.png"
              width={25}
              height={27}
              alt="SDT MAZDA BÌNH DƯƠNG"
            />
          </a>
        </div>
      </div>
      <div className={styles.contact_vr}>
        <div
          className={`${styles.fb_vr_circle_fill} ${styles.vr_circle_fill_first}`}
        ></div>
        <div
          className={`${styles.fb_vr_circle_fill} ${styles.vr_circle_fill_second}`}
        ></div>
        <div
          className={`${styles.fb_vr_circle_fill} ${styles.vr_circle_fill_third}`}
        ></div>
        <div className={styles.fb_vr_img_circle}>
          <a
            className={styles.link}
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100069266504823"
          >
            <Image
              className={styles.image}
              src="/fb.jpg"
              width={25}
              height={27}
              alt="FB MAZDA BÌNH DƯƠNG"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
