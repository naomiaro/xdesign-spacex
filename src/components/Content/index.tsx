import React, { FunctionComponent, useContext, Fragment } from 'react';
import { LaunchesContext } from 'SpaceXContext';
import { LaunchPane } from 'components/LaunchPane';
import cx from 'classnames';

type ContentProps = {
  className?: string;
};

export const Content: FunctionComponent<ContentProps> = ({ className }) => {
  const { launchData } = useContext(LaunchesContext);

  return (
    <main className={cx(className)} role="main">
      {launchData && (
        <Fragment>
          {launchData.loading && <div>Loading</div>}
          {launchData.error && <div>Error: {launchData.error.message}</div>}
          {launchData.result && <LaunchPane launches={launchData.result} />}
        </Fragment>
      )}
    </main>
  );
};
