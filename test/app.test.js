import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/components/App.jsx';



test('Creates a div', ()=> {
  const wrapper = shallow(<App />);
  console.log(wrapper)
  expect(wrapper).toContainExactlyOneMatchingElement('#Ahoy');

})

// expect(wrapper.find('div')).toBeTruthy();


