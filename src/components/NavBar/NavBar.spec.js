import React from 'react';
import { shallow, mount } from 'enzyme';
import { NavBar } from './NavBar';
const onClick = jest.fn;

describe('<NaBbar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it('matches snapshort', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('starts with the initial state', () => {
    const initialState = wrapper.state();
    expect(initialState.active_state).toEqual({
      login: 'inactive',
      signup: 'inactive',
      home: 'active'
    });
  });

  it('should should simulate click', () => {
    wrapper.find('#togler').simulate('click');
    expect(onClick()).toBeDefined;
  });
  it('should call checkToken ', () => {
    const token = jest.fn;
    const instance = wrapper.instance();
    expect(
      instance.checkToken({
        token
      })
    );
  });

  it('should call Active on home', () => {
    const instance = wrapper.instance();
    const value = 'home';
    expect(
      instance.Active({
        value
      })
    );
  });

  it('should call Active on login', () => {
    const instance = wrapper.instance();
    const value = 'login';
    expect(
      instance.Active({
        value
      })
    );
  });

  it('should call Active on signup', () => {
    const instance = wrapper.instance();
    const value = 'signup';
    expect(
      instance.Active({
        value
      })
    );
  });

  it('should call logout ', () => {
    const instance = wrapper.instance();
    window.localStorage.setItem('token', '');
    instance.checkToken();
    instance.logout();
    instance.Active('home');
    expect(wrapper.state('active_state').home).toEqual('active');
  });

  it('should call logout ', () => {
    const instance = wrapper.instance();
    window.localStorage.setItem('token', '');
    instance.checkToken();
    instance.Active('login');
    expect(wrapper.state('active_state').login).toEqual('active');
  });

  it('should call signup ', () => {
    const instance = wrapper.instance();
    window.localStorage.setItem('token', '');
    instance.checkToken();
    instance.Active('signup');
    expect(wrapper.state('active_state').signup).toEqual('active');
  });

  it('should recieve next props ', () => {
    const checkToken = jest.fn;
    window.location.pathname.substring(1);
    checkToken();

    wrapper.setProps({ loggedIn: 'login successfull', token: '' });
    expect(wrapper.state('active_state').login).toEqual('inactive');
  });
});
