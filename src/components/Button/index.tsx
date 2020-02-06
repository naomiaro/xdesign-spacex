import React, { FunctionComponent, MouseEventHandler } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.css';

const cx = classNames.bind(styles);

type ButtonProps = {
  onClick?: MouseEventHandler;
};

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
}) => {
  const className = cx({ btn: true });
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
