import React, { useState } from "react";
import styles from "./NavbarAssistens.module.scss";
import { navbarItems } from "utils/navbarItems";
import { NavLink } from "react-router-dom";
import { t } from "i18next";
import { Link } from "react-scroll";

const NavbarAssistens = () => {
  const [activeId, setActiveId] = useState(null);

  const handleSetActive = (to) => {
    setActiveId(to);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          {navbarItems?.map((item) => (
             <Link
              to={item.path}
              spy={true}
              smooth={true}
              offset={-200}
              duration={300}
              state={item.state}
              key={item.path}
              // onClick={() => handleSetActive(item.path)}
              onSetActive={handleSetActive}
              activeClass={styles.active}
              className={`${
                item.path === activeId ? styles.active : ""
              }`}
            >
              <li>{t(item.slug)}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavbarAssistens;
