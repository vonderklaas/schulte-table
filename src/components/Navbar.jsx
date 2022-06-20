import React from 'react';

import styles from './Navbar.module.css';

import { Link } from 'wouter';

export const Navbar = () => {
  return (
    <header className={styles.Header}>
      <Link href='/'>
        <h2>Shulte Tables</h2>
      </Link>
      <Link href='/game'>
        <h2>Try it out!</h2>
      </Link>
    </header>
  );
};
