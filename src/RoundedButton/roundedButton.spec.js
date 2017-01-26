import React from 'react';
import RoundedButton from './RoundedButton';
import {shallow, render, mount} from 'enzyme';

test('Rounded Button', () => {
  it('should render a button element', () => {
    let wrapper = shallow(<RoundedButton/>);

    expect(wrapper).toMatchSnapshot();
  });
});
