import React from 'react';
import ReactDOM from 'react-dom';
import { LaunchItem } from './index';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <LaunchItem
      flightNumber={1}
      missionName={'FalconSat'}
      rocketName={'Falcon 1'}
      launchDateUTC={'2006-03-24T22:30:00.000Z'}
    />,
    div
  );
});

it('Renders a LaunchItem', () => {
  const wrapper = shallow(
    <LaunchItem
      flightNumber={1}
      missionName={'FalconSat'}
      rocketName={'Falcon 1'}
      launchDateUTC={'2006-03-24T22:30:00.000Z'}
    >
      Refresh
    </LaunchItem>
  );
  expect(wrapper).toMatchSnapshot();
});
