import styles from "./Header.module.css";
import Image from "next/image";
import { useState } from "react";
import { Sidenav, Nav, Navbar } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { logo } from "../../data/logo";
import Link from "next/link";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  function onToggleClick() {
    setToggle(!toggle);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo_wrapper}>
        <Link className={styles.link} href="/">
          <Image
            src="https://www.otomazdabinhduong.com/mazda.jpg"
            width={80}
            height={56}
            className={styles.logo_img}
            alt={logo.alt}
          />
        </Link>
      </div>
      <div className={styles.menu_wrapper}>
        <Navbar classPrefix={styles.nav_bar}>
          <Nav>
            <Nav.Item eventKey="1" href="/" className={styles.link_item}>
              TRANG CHỦ
            </Nav.Item>
            <Nav.Menu
              eventKey="2"
              title="MAZDA SUV"
              className={styles.link_dropdown}
            >
              <Nav.Item eventKey="2-1">
                <a className={styles.link} href="/o-to/mazda-cx3">
                  All-New Mazda CX3
                </a>
              </Nav.Item>
              <Nav.Item eventKey="2-2">
                <a className={styles.link} href="/o-to/mazda-cx30">
                  All-New Mazda CX30
                </a>
              </Nav.Item>
              <Nav.Item eventKey="2-3">
                <a className={styles.link} href="/o-to/mazda-cx5">
                  All-New Mazda CX5
                </a>
              </Nav.Item>
              <Nav.Item eventKey="2-4">
                <a className={styles.link} href="/o-to/mazda-cx8">
                  All-New Mazda CX8
                </a>
              </Nav.Item>
            </Nav.Menu>
            <Nav.Menu
              eventKey="3"
              title="MAZDA SEDAN"
              className={styles.link_dropdown}
            >
              <Nav.Item eventKey="3-1">
                <a className={styles.link} href="/o-to/mazda-2">
                  All-New Mazda 2
                </a>
              </Nav.Item>
              <Nav.Item eventKey="3-2">
                <a className={styles.link} href="/o-to/mazda-3">
                  All-New Mazda 3
                </a>
              </Nav.Item>
              <Nav.Item eventKey="3-3">
                <a className={styles.link} href="/o-to/mazda-3">
                  All-New Mazda 6
                </a>
              </Nav.Item>
            </Nav.Menu>
            <Nav.Menu
              eventKey="4"
              title="MAZDA BÁN TẢI"
              className={styles.link_dropdown}
            >
              <Nav.Item eventKey="4-1">
                <a className={styles.link} href="/o-to/mazda-bt50">
                  All-New Mazda BT-50
                </a>
              </Nav.Item>
            </Nav.Menu>
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
                <Nav.Item eventKey="1" href="/">
                  TRANG CHỦ
                </Nav.Item>
                <Nav.Menu eventKey="2" title="MAZDA SUV">
                  <Nav.Item eventKey="2-1" href="/o-to/mazda-cx3">
                    All-New Mazda CX3
                  </Nav.Item>
                  <Nav.Item eventKey="2-2" href="/o-to/mazda-cx30">
                    All-New Mazda CX30
                  </Nav.Item>
                  <Nav.Item eventKey="2-3" href="/o-to/mazda-cx5">
                    All-New Mazda CX5
                  </Nav.Item>
                  <Nav.Item eventKey="2-4" href="/o-to/mazda-cx8">
                    All-New Mazda CX8
                  </Nav.Item>
                </Nav.Menu>
                <Nav.Menu eventKey="3" title="MAZDA SEDAN">
                  <Nav.Item eventKey="3-1" href="/o-to/mazda-2">
                    All-New Mazda 2
                  </Nav.Item>
                  <Nav.Item eventKey="3-2" href="/o-to/mazda-3">
                    All-New Mazda 3
                  </Nav.Item>
                  <Nav.Item eventKey="3-3" href="/o-to/mazda-3">
                    All-New Mazda 6
                  </Nav.Item>
                </Nav.Menu>
                <Nav.Menu eventKey="4" title="MAZDA BÁN TẢI">
                  <Nav.Item eventKey="4-1" href="/o-to/mazda-bt50">
                    Mazda BT-50
                  </Nav.Item>
                </Nav.Menu>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </div>
      )}
    </header>
  );
}
