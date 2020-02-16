import React, { FunctionComponent } from 'react';
import { SpaceXAPILaunch } from 'SpaceXContext';
import { LaunchItem } from 'components/LaunchItem';
import styles from './LaunchList.module.css';

type LaunchListProps = {
  launches: SpaceXAPILaunch[];
};

export const LaunchList: FunctionComponent<LaunchListProps> = ({
  launches,
}) => {
  return (
    // VoiceOver removing list semantics with css list-option none
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <ol className={styles.LaunchList} role="list">
      {launches.map((launch: SpaceXAPILaunch) => (
        <LaunchItem
          key={launch.mission_name}
          missionName={launch.mission_name}
          flightNumber={launch.flight_number}
          rocketName={launch.rocket.rocket_name}
          launchDateUTC={launch.launch_date_utc}
        ></LaunchItem>
      ))}
    </ol>
  );
};
