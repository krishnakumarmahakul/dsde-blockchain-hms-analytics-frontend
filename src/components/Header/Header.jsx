import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css'
import {styled} from 'styled-components'





function Header() {
    
  return <>
  <nav className={styles.navbar}>
      <div className={styles.logo}>MyApp</div>
      <ul className={styles.navLinks}>
      <li><Link to="/about" className={styles.navItem}>About</Link></li>
      <li><Link to="/about" className={styles.navItem}>About</Link></li>
      <li><Link to="/about" className={styles.navItem}>About</Link></li>
      <li><Link to="/about" className={styles.navItem}>About</Link></li>
        
      </ul>
    </nav>

  </>
  
}

export default Header