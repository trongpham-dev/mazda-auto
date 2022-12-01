import styles from "./Header.module.css";
import Image, { StaticImageData } from "next/image.js";
import { useState } from "react";
import { Sidenav, Nav, Navbar } from "rsuite";
import "rsuite/dist/rsuite.min.css";

interface Logo {
  logoURL: string | StaticImageData;
  alt: string;
}

export default function Header() {
  const [toggle, setToggle] = useState(false);
  function onToggleClick() {
    setToggle(!toggle);
  }

  const logoImage: Logo = {
    logoURL: "/mazda.jpg",
    alt: "XE MAZDA",
  };
  return (
    <header className={styles.header}>
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
        <Navbar classPrefix={styles.nav_bar}>
          <Nav>
            <Nav.Item eventKey="1">TRANG CHỦ</Nav.Item>
            <Nav.Menu eventKey="2" title="MAZDA SUV">
              <Nav.Item eventKey="2-1">
                <a className={styles.link} href="/o-to/mazda?id=mazda-cx3">
                  Mazda CX3
                </a>
              </Nav.Item>
              <Nav.Item eventKey="2-2">
                <a className={styles.link} href="/o-to/mazda?id=mazda-cx30">
                  Mazda CX30
                </a>
              </Nav.Item>
              <Nav.Item eventKey="2-3">
                <a className={styles.link} href="/o-to/mazda?id=mazda-cx5">
                  Mazda CX5 all new
                </a>
              </Nav.Item>
              <Nav.Item eventKey="2-4">
                <a className={styles.link} href="/o-to/mazda?id=mazda-cx8">
                  Mazda CX8
                </a>
              </Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="3" title="MAZDA SEDAN">
              <Nav.Item eventKey="3-1">
                <a className={styles.link} href="/o-to/mazda?id=mazda-2">
                  All-New Mazda 2
                </a>
              </Nav.Item>
              <Nav.Item eventKey="3-2">
                <a className={styles.link} href="/o-to/mazda?id=mazda-3">
                  All-New Mazda 3
                </a>
              </Nav.Item>
              <Nav.Item eventKey="3-3">
                <a className={styles.link} href="/o-to/mazda?id=mazda-3">
                  All-New Mazda 6
                </a>
              </Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="MAZDA BÁN TẢI">
              <Nav.Item eventKey="4-1">
                <a className={styles.link} href="/o-to/mazda?id=mazda-bt-50">
                  Mazda BT-50
                </a>
              </Nav.Item>
            </Nav.Menu>
            <Nav.Item eventKey="5">LIÊN HỆ</Nav.Item>
          </Nav>
        </Navbar>
      </div>
      <div className={styles.hamburger_icon} onClick={() => onToggleClick()}>
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
      {/*mobile menu*/}
      {toggle && (
        <div className={styles.mobile_sidebar_content}>
          <Sidenav>
            <Sidenav.Body>
              <Nav activeKey="1">
                <Nav.Item eventKey="1">TRANG CHỦ</Nav.Item>
                <Nav.Menu eventKey="2" title="MAZDA SUV">
                  <Nav.Item eventKey="2-1" href="/o-to/mazda?id=mazda-cx3">
                    Mazda CX3
                  </Nav.Item>
                  <Nav.Item eventKey="2-2" href="/o-to/mazda?id=mazda-cx30">
                    Mazda CX30
                  </Nav.Item>
                  <Nav.Item eventKey="2-3" href="/o-to/mazda?id=mazda-cx5">
                    Mazda CX5 all new
                  </Nav.Item>
                  <Nav.Item eventKey="2-4" href="/o-to/mazda?id=mazda-cx8">
                    Mazda CX8
                  </Nav.Item>
                </Nav.Menu>
                <Nav.Menu eventKey="3" title="MAZDA SEDAN">
                  <Nav.Item eventKey="3-1" href="/o-to/mazda?id=mazda-2">
                    All-New Mazda 2
                  </Nav.Item>
                  <Nav.Item eventKey="3-2" href="/o-to/mazda?id=mazda-3">
                    All-New Mazda 3
                  </Nav.Item>
                  <Nav.Item eventKey="3-3" href="/o-to/mazda?id=mazda-3">
                    All-New Mazda 6
                  </Nav.Item>
                </Nav.Menu>
                <Nav.Menu eventKey="4" title="MAZDA BÁN TẢI">
                  <Nav.Item eventKey="4-1" href="/o-to/mazda?id=mazda-bt-50">
                    Mazda BT-50
                  </Nav.Item>
                </Nav.Menu>
                <Nav.Item eventKey="5">LIÊN HỆ</Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </div>
      )}
    </header>
  );
}
