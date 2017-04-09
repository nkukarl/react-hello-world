import expect from 'expect';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import FakeComponent from '../src/Header/FakeComponent';

describe('<FakeComponent />', () => {

  const wrapper = shallow(<FakeComponent />);

  it('basic', () => {
    expect(wrapper.find('h1').length).toEqual(2);
    expect(wrapper.find('.hello').text()).toEqual('Hello');
    expect(wrapper.find('#world').text()).toEqual('world');
  })

  it('simulate button click', () => {
    wrapper.find('#add').simulate('click');
    expect(wrapper.find('#count').text()).toEqual(1);

    wrapper.find('#del').simulate('click');
    expect(wrapper.find('#count').text()).toEqual(0);


  });


});
