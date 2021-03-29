import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '@components';

test('Renders Button component and match to previous snapshot', () => {
  const component = shallow(<Button />);
  expect(component).toMatchSnapshot();
});
