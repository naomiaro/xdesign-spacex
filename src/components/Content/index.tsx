import React, { FunctionComponent, useContext } from 'react';
import { LaunchesContext, SpaceXAPILaunch } from 'SpaceXContext';
import styles from './Content.module.css';
import { LaunchItem } from 'components/LaunchItem';

type ContentProps = {};

export const Content: FunctionComponent<ContentProps> = () => {
  const { launchData } = useContext(LaunchesContext);
  return (
    <main>
      <div>
        {launchData!.loading && <div>Loading</div>}
        {launchData!.error && <div>Error: {launchData!.error.message}</div>}
        {launchData!.result && (
          <ul>
            {launchData!.result.map((launch: SpaceXAPILaunch) => (
              <LaunchItem
                missionName={launch.mission_name}
                flightNumber={launch.flight_number}
                rocketName={launch.rocket_name}
                launchDateUTC={launch.launch_date_utc}
              ></LaunchItem>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};
