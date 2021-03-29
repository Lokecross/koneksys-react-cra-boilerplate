import React from 'react';
import { shallow } from 'enzyme';
import { Shimmer } from '@components';

test('Renders Shimmer component and match to previous snapshot', () => {
  const component = shallow(<Shimmer />);
  expect(component).toMatchSnapshot();
});
