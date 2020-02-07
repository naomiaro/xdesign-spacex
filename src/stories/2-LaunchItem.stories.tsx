import React from 'react';
import { LaunchItem } from 'components/LaunchItem';

export default {
  title: 'LaunchItem',
  component: LaunchItem,
};

export const Standard = () => (
  <LaunchItem
    flightNumber={1}
    missionName={'FalconSat'}
    rocketName={'Falcon 1'}
    launchDateUTC={'2006-03-24T22:30:00.000Z'}
  />
);
