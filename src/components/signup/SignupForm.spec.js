import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from './SignupForm';

describe('<SignupForm />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignupForm />);
  });

  it('matches snapshort', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
