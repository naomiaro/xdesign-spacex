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
      <div>#{flightNumber}</div>
      <div>{missionName}</div>
      <div>
        <div>{format(date, 'do LLL yyyy')}</div>
        <div>{rocketName}</div>
      </div>
    </li>
  );
};
