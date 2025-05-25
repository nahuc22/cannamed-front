import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBarPrueba.module.css';
import logo from '../../assets/logo.png';
import CartIcon from './CartIcon';
import SheetComponent from '../Sheet/Sheet';

export default function NavBarPrueba() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleCartClick = () => {
    setIsSheetOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      >
        <div className={styles.container}>
          <img className={styles.logo} src={logo} alt="Logo" />
        </div>
        <ul className={`${styles.navLinks}`}>
          <li className={styles.navItem}>
            <NavLink to="/home" className={`${styles.navLink} ${scrolled ? styles.navLinkScrolled : ''}`}>
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/nosotros" className={`${styles.navLink} ${scrolled ? styles.navLinkScrolled : ''}`}>
              Nosotros
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/asociate" className={`${styles.navLink} ${scrolled ? styles.navLinkScrolled : ''}`}>
              Asociate
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/products" className={`${styles.navLink} ${scrolled ? styles.navLinkScrolled : ''}`}>
              Productos
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <CartIcon onClick={handleCartClick} />
          </li>
        </ul>
        <SheetComponent open={isSheetOpen} setOpen={setIsSheetOpen} />
      </nav>
    </>
  );
}
