import { cars } from "../../data/dump.js";
import styles from "./Header.module.css";
import Image, { StaticImageData } from "next/image.js";
import { useState } from "react";
import Link from "next/link.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Logo {
  logoURL: string | StaticImageData;
  alt: string;
}

export default function Header() {
  const [toggle, setToggle] = useState(false);
  function onToggleClick() {
    setToggle(!toggle);
  }

  const [isOpen, setIsopen] = useState(false);

  const toggleDropDown = () => {
    setIsopen((isOpen) => !isOpen);
  };

  const logoImage: Logo = {
    logoURL: "/mazda-logo.jpg",
    alt: "XE MAZDA",
  };
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
            className={toggle ? `${styles.openn_menu}` : `${styles.menu}`}
            key="menu"
          >
            <li className={styles.item} key="home">
              <a className={styles.link} href="/">
                TRANG CHỦ
              </a>
            </li>
            <li
              className={`${styles.item} ${styles.has_sub_menu}`}
              onClick={toggleDropDown}
              key="model"
            >
              <a className={styles.link} tabIndex={0}>
                MẪU XE
              </a>
              <div className={styles.sub_menu_wrapper}>
                <ul className={styles.sub_menu} key="submenu">
                  {cars?.map((car) => (
                    <li className={styles.sub_item} key={car.id}>
                      <a
                        href={`${car.path}?id=${car.id}`}
                        className={styles.link}
                      >
                        {car.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {isOpen && (
              <div className={styles.vertical_sub_menu_wrapper}>
                <ul className={styles.vertical_sub_menu} key="submenu">
                  {cars?.map((car) => (
                    <li className={styles.sub_item} key={car.id}>
                      <a
                        href={`${car.path}?id=${car.id}`}
                        className={styles.link}
                      >
                        {car.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
      {/*mobile menu*/}
      {toggle && (
        <div className={styles.mobile_sidebar_content}>
          <div className={styles.mobile_sidebar}>
            <div className={styles.sidebar_menu}>
              <ul className={styles.nav_vertical}>
                <li className={styles.nav_vertical_item}>
                  <a href="/" className={styles.nav_vertical_link}>
                    Trang chủ
                  </a>
                </li>
                <li
                  className={`${styles.nav_vertical_item} ${styles.suv_link}`}
                >
                  <a href="/" className={styles.nav_vertical_link}>
                    MAZDA SUV
                  </a>
                  <FontAwesomeIcon icon={"arrow-circle-down"} />
                  <ul
                    className={`${styles.sub_nav_vertical} ${styles.suv_nav_vertical}`}
                  >
                    <li className={styles.nav_vertical_item}>
                      <a href="/" className={styles.nav_vertical_link}>
                        Mazda CX3
                      </a>
                    </li>
                    <li className={styles.nav_vertical_item}>
                      <a href="/" className={styles.nav_vertical_link}>
                        Mazda CX30
                      </a>
                    </li>
                    <li className={styles.nav_vertical_item}>
                      <a href="/" className={styles.nav_vertical_link}>
                        Mazda CX-5 all new
                      </a>
                    </li>
                    <li className={styles.nav_vertical_item}>
                      <a href="/" className={styles.nav_vertical_link}>
                        Mazda CX-8
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
