import React, { FunctionComponent, MouseEventHandler } from 'react';
import cx from 'classnames';
import styles from './Button.module.css';

type ButtonProps = {
  onClick?: MouseEventHandler;
};

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
}) => {
  const className = cx(styles.btn, styles['btn-primary']);
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
