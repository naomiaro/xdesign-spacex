import React, {
  FunctionComponent,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { useAsyncAbortable, UseAsyncReturn } from 'react-async-hook';
import { Announcements } from 'components/Announcements';

type Rocket = {
  rocket_name: string;
};

export type SpaceXAPILaunch = {
  mission_name: string;
  flight_number: number;
  rocket: Rocket;
  launch_date_utc: string;
  launch_year: number;
};

type LaunchesProps = {
  launchData: UseAsyncReturn<SpaceXAPILaunch[], number[]>;
};

type RefreshProps = {
  refresh: VoidFunction;
};

export const LaunchesContext = createContext<Partial<LaunchesProps>>({});
export const RefreshContext = createContext<RefreshProps>({
  refresh: () => {},
});

const fetchSpaceXLaunches = async (abortSignal: AbortSignal) => {
  const res = await fetch('https://api.spacexdata.com/v3/launches', {
    signal: abortSignal,
  });

  if (!res.ok) {
    throw new Error('Network response was not ok' + res.status);
  }
  return res.json();
};

function createRefresh(setTs: Dispatch<SetStateAction<number>>) {
  return function() {
    setTs(Date.now());
  };
}

export const SpaceXProvider: FunctionComponent = ({ children }) => {
  const [ts, setTs] = useState(Date.now());
  const launchData = useAsyncAbortable(fetchSpaceXLaunches, [ts]);
  const refresh = createRefresh(setTs);

  return (
    <RefreshContext.Provider value={{ refresh }}>
      <LaunchesContext.Provider value={{ launchData }}>
        {children}
        <Announcements
          message={
            launchData.loading
              ? 'Loading'
              : launchData.error
              ? `Error ${launchData.error.message}`
              : 'SpaceX Launches Loaded'
          }
        />
      </LaunchesContext.Provider>
    </RefreshContext.Provider>
  );
};
