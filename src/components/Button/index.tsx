import React, { FunctionComponent, MouseEventHandler } from 'react';
import cx from 'classnames';
import styles from './Button.module.css';

type ButtonProps = {
  onClick?: MouseEventHandler;
  className?: string;
  icon?: 'refresh' | 'select' | 'sort';
};

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  className,
  icon,
}) => {
  return (
    <button
      type="button"
      className={cx(styles.btn, styles['btn-primary'], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const BulletButton: FunctionComponent<ButtonProps> = ({
  className,
  ...props
}) => {
  return <Button {...props} className={cx(styles.bullet, className)} />;
};
