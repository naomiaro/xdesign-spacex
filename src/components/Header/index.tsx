import React, { FunctionComponent } from 'react';
import logo from 'assets/spacex-logo.png';
import { Button } from 'components/Button/index';
import styles from './Header.module.css';

type HeaderProps = {};

export const Header: FunctionComponent<HeaderProps> = () => (
  <header className={styles.header}>
    <div>
      <img src={logo} className={styles.logo} alt="logo" />
      <span>Launches</span>
    </div>
    <Button>Reload Data</Button>
  </header>
);
