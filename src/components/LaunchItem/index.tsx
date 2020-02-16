import React, { FunctionComponent } from 'react';
import { parseISO, format } from 'date-fns';
import styles from './LaunchItem.module.css';

type LaunchItemProps = {
  flightNumber: number;
  missionName: string;
  rocketName: string;
  launchDateUTC: string;
};

export const LaunchItem: FunctionComponent<LaunchItemProps> = ({
  missionName,
  flightNumber,
  rocketName,
  launchDateUTC,
}) => {
  const date = parseISO(launchDateUTC);
  return (
    <li>
      <div className={styles.content}>
        <div className={styles.flightNumber}>#{flightNumber}</div>
        <div className={styles.missionName}>{missionName}</div>
        <div className={styles.info}>
          <div>{format(date, 'do LLL yyyy')}</div>
          <div className={styles.rocketName}>{rocketName}</div>
        </div>
      </div>
    </li>
  );
};
