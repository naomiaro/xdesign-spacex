import React, { FunctionComponent, useContext } from 'react';
import { LaunchesContext } from 'SpaceXContext';
import styles from './Content.module.css';
import { LaunchPane } from 'components/LaunchPane';
import cx from 'classnames';

type ContentProps = {
  className?: string;
};

export const Content: FunctionComponent<ContentProps> = ({ className }) => {
  const { launchData } = useContext(LaunchesContext);

  return (
    <main className={cx(className)}>
      <div>
        {launchData!.loading && <div>Loading</div>}
        {launchData!.error && <div>Error: {launchData!.error.message}</div>}
        {launchData!.result && <LaunchPane launches={launchData!.result} />}
      </div>
    </main>
  );
};
