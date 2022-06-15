import React from 'react';

import styles from './Navbar.module.css';

import { Link } from 'wouter';

export const Navbar = () => {
  return (
    <header className={styles.Header}>
      <h2>Shulte Tables</h2>
      <nav className={styles.Navbar}>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/game'>
          <a>Game</a>
        </Link>
      </nav>
    </header>
  );
};
