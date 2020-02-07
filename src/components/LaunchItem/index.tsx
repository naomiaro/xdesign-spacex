import React, { FunctionComponent } from 'react';
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
  return (
    <li>
      <div>#{flightNumber}</div>
      <div>{missionName}</div>
      <div>
        <div>{launchDateUTC}</div>
        <div>{rocketName}</div>
      </div>
    </li>
  );
};
