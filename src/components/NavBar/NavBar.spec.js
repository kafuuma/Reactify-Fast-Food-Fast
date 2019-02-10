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
  it('should call homeActive ', () => {
    const instance = wrapper.instance();
    expect(
      instance.homeActive({
        preventDefault: jest.fn,
        homeActive: true,
        signupActive: false,
        loginActive: false
      })
    );
  });

  it('should call signupActive ', () => {
    const instance = wrapper.instance();
    expect(
      instance.signupActive({
        preventDefault: jest.fn,
        homeActive: false,
        signupActive: true,
        loginActive: false
      })
    );
  });

  it('should call loginActive ', () => {
    const instance = wrapper.instance();
    expect(
      instance.loginActive({
        preventDefault: jest.fn,
        homeActive: false,
        signupActive: false,
        loginActive: true
      })
    );
  });
});
