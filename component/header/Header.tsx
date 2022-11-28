import { cars } from "../../data/dump.js";
import styles from "./Header.module.css";
import Image, { StaticImageData } from "next/image.js";
import { useState } from "react";

interface Logo {
  logoURL: string | StaticImageData;
  alt: string;
}
const logoImage: Logo = {
  logoURL: "/mazda-logo.jpg",
  alt: "XE MAZDA",
};
export default function Header() {
  const [toggle, setToggle] = useState(false);
  function onToggleClick() {
    setToggle(!toggle);
  }
  return (
    <header className={styles.header}>
      <nav className={styles.nav_bar}>
        <div className={styles.logo_wrapper}>
          <a className={styles.link} href="/">
            <Image
              src={logoImage.logoURL}
              width={80}
              height={80}
              className={styles.logo_img}
              alt={logoImage.alt}
            />
          </a>
        </div>
        <div className={styles.menu_wrapper}>
          <ul
            className={toggle ? `${styles.open_menu}` : `${styles.menu}`}
            key="menu"
          >
            <li className={styles.item} key="home">
              <a className={styles.link} href="/">
                TRANG CHỦ
              </a>
            </li>
            <li className={`${styles.item} ${styles.has_sub_menu}`} key="model">
              <a className={styles.link} tabIndex={0}>
                MẪU XE
              </a>
              <div className={styles.sub_menu_wrapper}>
                <ul className={styles.sub_menu} key="submenu">
                  {cars?.map((car) => (
                    <>
                      <li className={styles.sub_item} key={car}>
                        <a className={styles.link} href="/">
                          {car}
                        </a>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </li>
            <li className={styles.item} key="contact">
              <a className={styles.link} href="/">
                LIÊN HỆ
              </a>
            </li>
          </ul>
          <div
            className={styles.hamburger_icon}
            onClick={() => onToggleClick()}
          >
            <div
              className={toggle ? `${styles.open_bar1}` : `${styles.bar1}`}
            ></div>
            <div
              className={toggle ? `${styles.open_bar2}` : `${styles.bar2}`}
            ></div>
            <div
              className={toggle ? `${styles.open_bar3}` : `${styles.bar3}`}
            ></div>
          </div>
        </div>
      </nav>
    </header>
  );
}
