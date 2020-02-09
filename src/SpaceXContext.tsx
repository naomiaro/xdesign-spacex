import React, {
  FunctionComponent,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { useAsyncAbortable, UseAsyncReturn } from 'react-async-hook';

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
  setTs: Dispatch<SetStateAction<number>>;
};

export const LaunchesContext = createContext<Partial<LaunchesProps>>({});
export const RefreshContext = createContext<RefreshProps>({
  setTs: () => {},
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

export const SpaceXProvider: FunctionComponent = ({ children }) => {
  const [ts, setTs] = useState(Date.now());
  const launchData = useAsyncAbortable(fetchSpaceXLaunches, [ts]);

  return (
    <RefreshContext.Provider value={{ setTs }}>
      <LaunchesContext.Provider value={{ launchData }}>
        {children}
      </LaunchesContext.Provider>
    </RefreshContext.Provider>
  );
};
