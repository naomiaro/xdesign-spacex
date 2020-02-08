import React, { FunctionComponent } from 'react';
import styles from './LaunchList.module.css';
import { SpaceXAPILaunch } from 'SpaceXContext';
import { LaunchItem } from 'components/LaunchItem';
import { SortDirection } from 'components/LaunchPane';
import cx from 'classnames';

type LaunchListProps = {
  launches: SpaceXAPILaunch[];
  sort: SortDirection;
};

export const LaunchList: FunctionComponent<LaunchListProps> = ({
  launches,
  sort,
}) => {
  return (
    <ul
      className={cx(
        styles.LaunchList,
        { [styles.asc]: sort === 1 },
        { [styles.desc]: sort === -1 }
      )}
    >
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
