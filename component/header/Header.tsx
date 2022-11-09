import { cars } from "../../data/dump.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Home.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image.js";
import logo from "../../static/images/logo.png";

export default function Header() {
  return (
    <nav className={styles.nav_bar}>
      <ul className={styles.menu}>
        <div className={styles.logo_wrapper}>
          <li className={styles.logo}>
            <a className={styles.link} href="/">
              <Image src={logo} width={80} height={80} alt="Xe mazda" />
            </a>
          </li>
        </div>
        <div className={styles.item_wrapper}>
          <li className={styles.item}>
            <a className={styles.link} href="/">
              Trang Chủ
            </a>
          </li>
          <li className={`${styles.item} ${styles.has_sub_menu}`}>
            <a className={styles.link} href="/" tabIndex={0}>
              Mẫu Xe
            </a>
            <ul className={styles.sub_menu}>
              {cars?.map((car) => (
                <li className={styles.sub_item} key={car}>
                  <a className={styles.link} href="/">
                    {car}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/">
              Liên hệ
            </a>
          </li>
        </div>

        <li className={styles.toggle}>
          <a className={styles.link} href="/">
            <i className="fas fa-bars"></i>
            <FontAwesomeIcon className={styles.hambuger} icon={faBars} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
