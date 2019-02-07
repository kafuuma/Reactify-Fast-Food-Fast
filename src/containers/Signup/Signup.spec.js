import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from './Signup';

const state = {
  full_name: '',
  email: '',
  contact: '',
  password: '',
  confirm_password: ''
};

const toast = jest.fn;
const message = {
  message: 'login successful'
};

const props = {
  toast,
  message
};

describe('<Signup />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Signup />);
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

  it('should recieve nect prosp ', () => {
    wrapper.setProps(props);
    expect(wrapper.state()).toEqual(state);
  });
});
