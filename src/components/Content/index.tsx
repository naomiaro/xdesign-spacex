import React, { FunctionComponent, useContext } from 'react';
import { LaunchesContext } from 'SpaceXContext';
import styles from './Content.module.css';

type ContentProps = {};

export const Content: FunctionComponent<ContentProps> = () => {
  const { launchData } = useContext(LaunchesContext);
  return (
    <main>
      <div>
        {launchData!.loading && <div>Loading</div>}
        {launchData!.error && <div>Error: {launchData!.error.message}</div>}
        {launchData!.result && (
          <div>
            <div>{JSON.stringify(launchData!.result)}</div>
          </div>
        )}
      </div>
    </main>
  );
};
