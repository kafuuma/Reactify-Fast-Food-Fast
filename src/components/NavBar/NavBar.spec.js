import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';
const onClick = jest.fn;

describe('<NaBbar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it('matches snapshort', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should should simulate click', () => {
    wrapper.find('#togler').simulate('click');
    expect(onClick()).toBeDefined;
  });
});
