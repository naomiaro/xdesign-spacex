import React, { FunctionComponent } from 'react';
import styles from './Icon.module.css';
import refresh from 'assets/icon/refresh.png';
import refresh2x from 'assets/icon/refresh@2x.png';
import refresh3x from 'assets/icon/refresh@3x.png';

import select from 'assets/icon/select.png';
import select2x from 'assets/icon/select@2x.png';
import select3x from 'assets/icon/select@3x.png';

import sort from 'assets/icon/sort.png';
import sort2x from 'assets/icon/sort@2x.png';
import sort3x from 'assets/icon/sort@3x.png';

type iconProps = {
  srcSet: string[];
  alt: string;
};

const Icon: FunctionComponent<iconProps> = ({ srcSet, alt }) => {
  return (
    <span className={styles.Icon} aria-hidden="true">
      <img
        srcSet={`${srcSet[0]},
        ${srcSet[1]} 2x,
        ${srcSet[2]} 3x`}
        src={srcSet[0]}
        alt={alt}
      ></img>
    </span>
  );
};

export const RefreshIcon: FunctionComponent = () => {
  return <Icon srcSet={[refresh, refresh2x, refresh3x]} alt="Refresh icon" />;
};

export const SelectIcon: FunctionComponent = () => {
  return <Icon srcSet={[select, select2x, select3x]} alt="Select icon" />;
};

export const SortIcon: FunctionComponent = () => {
  return <Icon srcSet={[sort, sort2x, sort3x]} alt="Sort icon" />;
};
