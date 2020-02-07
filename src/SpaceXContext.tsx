import React, {
  FunctionComponent,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { useAsync, UseAsyncReturn } from 'react-async-hook';

const fetchSpaceXLaunches = async () =>
  (await fetch(`https://api.spacexdata.com/v3/launches`)).json();

type LaunchesProps = {
  launchData: UseAsyncReturn;
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
