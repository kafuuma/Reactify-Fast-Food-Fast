import actionTypes from '../../actions/actionTypes';
import signupReducer from '../signupReducer';

const initialStore = {
  user: {},
  time_flag: ''
};

describe('signup reducer', () => {
  it('should return the initial state unknown action type', () => {
    expect(signupReducer(undefined, {})).toEqual(initialStore);
  });
  it('should return the initial state on SIGNUPFAIL type', () => {
    const type = actionTypes.SIGNUPFAIL;
    expect(
      signupReducer(undefined, {
        type: type,
        payload: {}
      })
    ).toEqual({});
  });
  it('should return new state on SIGNUPSUCCESS type', () => {
    const newUser = {
      user: {
        email: 'arkafuuma@gmal.com',
        password: 'StrongPassword'
      }
    };
    expect(
      signupReducer(undefined, {
        type: actionTypes.SIGNUPSUCCESS,
        payload: newUser
      })
    ).toMatchObject({ user: newUser });
  });
});
