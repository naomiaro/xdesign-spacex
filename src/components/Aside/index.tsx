import React, { FunctionComponent } from 'react';
import rocket from 'assets/img/launch-home.png';
import rocket2x from 'assets/img/launch-home@2x.png';
import rocket3x from 'assets/img/launch-home@3x.png';
import cx from 'classnames';
import styles from './Aside.module.css';

type AsideProps = {
  className?: string;
};

export const Aside: FunctionComponent<AsideProps> = ({ className }) => {
  return (
    <aside className={cx(className, styles.Aside)}>
      <img
        className={styles.img}
        srcSet={`${rocket},
        ${rocket2x} 2x,
        ${rocket3x} 3x`}
        src={rocket}
        alt="Rocket Launch"
      ></img>
    </aside>
  );
};
