import React, { FunctionComponent } from 'react';
import logo from 'assets/spacex-logo.png';
import { BulletButton } from 'components/Button/index';
import styles from './Header.module.css';
import cx from 'classnames';
import { RefreshIcon } from 'components/Icon';

type HeaderProps = {
  className?: string;
};

export const Header: FunctionComponent<HeaderProps> = ({ className }) => (
  <header className={cx(className, styles.header)}>
    <div>
      <img src={logo} className={styles.logo} alt="logo" />
      <span>Launches</span>
    </div>
    <BulletButton>
      Reload Data <RefreshIcon />
    </BulletButton>
  </header>
);
