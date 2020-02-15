import React, { FunctionComponent } from 'react';
import styles from './LaunchList.module.css';
import { SpaceXAPILaunch } from 'SpaceXContext';
import { LaunchItem } from 'components/LaunchItem';
import cx from 'classnames';

type LaunchListProps = {
  launches: SpaceXAPILaunch[];
};

export const LaunchList: FunctionComponent<LaunchListProps> = ({
  launches,
}) => {
  return (
    <ul className={cx(styles.LaunchList)} aria-live="polite" aria-atomic="true">
      {launches.map((launch: SpaceXAPILaunch) => (
        <LaunchItem
          key={launch.mission_name}
          missionName={launch.mission_name}
          flightNumber={launch.flight_number}
          rocketName={launch.rocket.rocket_name}
          launchDateUTC={launch.launch_date_utc}
        ></LaunchItem>
      ))}
    </ul>
  );
};
