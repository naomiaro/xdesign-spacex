import React, { FunctionComponent, useContext } from 'react';
import { RefreshContext } from 'SpaceXContext';
import logo from 'assets/spacex-logo.png';
import { BulletButton } from 'components/Button/index';
import styles from './Header.module.css';
import cx from 'classnames';
import { RefreshIcon } from 'components/Icon';

type HeaderProps = {
  className?: string;
};

export const Header: FunctionComponent<HeaderProps> = ({ className }) => {
  const { setTs } = useContext(RefreshContext);
  return (
    <header className={cx(className, styles.Header)}>
      <div>
        <img src={logo} className={styles.logo} alt="logo" />
        <span className={styles.launches}>Launches</span>
      </div>
      <BulletButton
        onClick={() => {
          setTs(Date.now());
        }}
      >
        Reload Data <RefreshIcon />
      </BulletButton>
    </header>
  );
};
