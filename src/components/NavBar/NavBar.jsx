import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Navbar.module.css';
import CartIcon from './CartIcon';
import SheetComponent from '../Sheet/Sheet';

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleCartClick = () => {
    setIsSheetOpen(true)
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <ul className={`${styles["nav-links"]}`}>
        <li className={styles["nav-item"]}>
          <NavLink to="/home" className={styles["nav-link"]} >
            Home
          </NavLink>
        </li>
        <li className={styles["nav-item"]}>
          <NavLink to="/nosotros" className={styles["nav-link"]} >
            Nosotros
          </NavLink>
        </li>
        <li className={styles["nav-item"]}>
          <NavLink to="/asociate" className={styles["nav-link"]}>
            Asociate
          </NavLink>
        </li>
        <li className={styles["nav-item"]}>
          <NavLink to="/products" className={styles["nav-link"]}>
            Productos
          </NavLink>
        </li>
        <li className={styles["nav-item"]}>
           <CartIcon onClick={handleCartClick}/> 
        </li>
      </ul>
      <SheetComponent open={isSheetOpen} setOpen={setIsSheetOpen} />
    </nav>
  );
};

export default Navbar;
