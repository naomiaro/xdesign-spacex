import React, { FunctionComponent } from 'react';
import logo from 'assets/spacex-logo.png';
import { Button } from 'components/Button/index';
import styles from './Header.module.css';
import cx from 'classnames';

type HeaderProps = {
  className?: string;
};

export const Header: FunctionComponent<HeaderProps> = ({ className }) => (
  <header className={cx(className, styles.header)}>
    <div>
      <img src={logo} className={styles.logo} alt="logo" />
      <span>Launches</span>
    </div>
    <Button>Reload Data</Button>
  </header>
);
