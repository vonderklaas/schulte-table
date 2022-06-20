import React from 'react';

import styles from './Navbar.module.css';

import { Link } from 'wouter';

export const Navbar = () => {
  return (
    <header className={styles.Header}>
      <Link href='/'>
        <h2>Schulte Tables</h2>
      </Link>
      <Link href='/game'>
        <h2>Play</h2>
      </Link>
    </header>
  );
};
