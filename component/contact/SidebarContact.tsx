import Image from "next/image";
import styles from "./SidebarContact.module.css";
export default function SidebarContact() {
  return (
    <div id="zalo-vr" className={styles.button_contact}>
      <div className={styles.phone_vr}>
        <div className={styles.phone_vr_circle_fill}></div>
        <div className={styles.phone_vr_img_circle}>
          <a
            className={styles.link}
            target="_blank"
            href="https://zalo.me/0979358912"
          >
            <Image
              className={styles.zalo_image}
              src="https://mazdabinhduongauto.com/wp-content/plugins/button-contact-vr/img/zalo.png"
              width={50}
              height={50}
              alt="dfdsf"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
