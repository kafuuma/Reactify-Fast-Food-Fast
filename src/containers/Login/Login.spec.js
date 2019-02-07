import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

const state = {
  email: '',
  password: ''
};
const toast = jest.fn;

describe('<Login />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('matches snapshort', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call handleChange ', () => {
    const instance = wrapper.instance();
    expect(
      instance.handleChange({
        preventDefault: jest.fn,
        target: {
          name: 'email'
        }
      })
    );
  });
  it('should call handleSubmit ', () => {
    const instance = wrapper.instance();
    expect(
      instance.handleSubmit({
        preventDefault: jest.fn
      })
    );
  });

  it('should handle login success ', () => {
    const message = {
      message: {
        message: 'login successful',
        Athentication: 'moked token'
      }
    };
    const props = {
      message: 'login successful',
      toast
    };
    const testWrapper = shallow(<Login />);
    testWrapper.setProps({ ...props });
    expect(testWrapper.props());
  });
  it('should handle login failure ', () => {
    const message = {
      message: {
        message: 'login failure',
        Athentication: 'moked token'
      }
    };
    const props = {
      message,
      toast
    };
    wrapper.setProps(props);
    expect(wrapper.state()).toEqual(state);
  });
});
