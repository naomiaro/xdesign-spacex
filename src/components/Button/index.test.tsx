import React from 'react';
import ReactDOM from 'react-dom';
import { Button, BulletButton } from './index';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
});

describe('Rendering', () => {
  it('Renders a Button', () => {
    const wrapper = shallow(<Button>Refresh</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders a BulletButton', () => {
    const wrapper = shallow(<BulletButton>Refresh</BulletButton>);
    expect(wrapper).toMatchSnapshot();
  });
});
