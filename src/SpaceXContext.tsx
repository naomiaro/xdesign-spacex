import React, {
  FunctionComponent,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { useAsync, UseAsyncReturn } from 'react-async-hook';

export type SpaceXAPILaunch = {
  mission_name: string;
  flight_number: number;
  rocket_name: string;
  launch_date_utc: string;
};

const fetchSpaceXLaunches = async (): Promise<SpaceXAPILaunch[]> =>
  (await fetch(`https://api.spacexdata.com/v3/launches`)).json();

type LaunchesProps = {
  launchData: UseAsyncReturn<SpaceXAPILaunch[], number[]>;
};

type RefreshProps = {
  setTs: Dispatch<SetStateAction<number>>;
};

export const LaunchesContext = createContext<Partial<LaunchesProps>>({});
export const RefreshContext = createContext<Partial<RefreshProps>>({});

export const SpaceXProvider: FunctionComponent = ({ children }) => {
  const [ts, setTs] = useState(Date.now());
  const launchData = useAsync(fetchSpaceXLaunches, [ts]);

  return (
    <RefreshContext.Provider value={{ setTs }}>
      <LaunchesContext.Provider value={{ launchData }}>
        {children}
      </LaunchesContext.Provider>
    </RefreshContext.Provider>
  );
};