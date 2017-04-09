import expect from 'expect';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import FakeComponent from '../src/Header/FakeComponent';

describe('<FakeComponent />', () => {
  it('trial', () => {
    const wrapper = render(<FakeComponent />);
    expect(wrapper.find('h1').length).toEqual(3);
    expect(wrapper.find('.hello').text()).toEqual('Hello');
    expect(wrapper.find('#world').text()).toEqual('world');
    expect(wrapper.find('h1[name=exclamation_mark]').text()).toEqual('!!');
  })

});
