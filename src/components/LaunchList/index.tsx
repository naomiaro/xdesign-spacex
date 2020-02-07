import React, { FunctionComponent, useState } from 'react';
import styles from './LaunchList.module.css';
import { SpaceXAPILaunch } from 'SpaceXContext';
import { LaunchItem } from 'components/LaunchItem';

type LaunchListProps = {
  launches: SpaceXAPILaunch[];
};

type SortDirection = 'asc' | 'desc';
type Year = number | null;

export const LaunchList: FunctionComponent<LaunchListProps> = ({
  launches,
}) => {
  const [sort, toggleSort] = useState<SortDirection>('asc');
  const [year, setYear] = useState<Year>(null);

  const viewData = launches.filter(data =>
    year === null ? true : data.launch_year === year
  );
  if (sort === 'desc') {
    viewData.reverse();
  }

  return (
    <ul>
      {viewData.map((launch: SpaceXAPILaunch) => (
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
