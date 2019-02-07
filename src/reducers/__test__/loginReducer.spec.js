import actionTypes from '../../actions/actionTypes';
import lignupReducer from '../loginReducer';

const initialStore = {
  user: {}
};

describe('login reducer', () => {
  it('should return the initial state unknown action type', () => {
    expect(lignupReducer(undefined, {})).toEqual(initialStore);
  });
  it('should return the initial state on LOGINFAIL type', () => {
    const type = actionTypes.LOGINFAIL;
    expect(
      lignupReducer(undefined, {
        type: type,
        payload: { email: '', password: '' }
      })
    ).toEqual({ user: { email: '', password: '' } });
  });
  it('should return new state on LOGINSUCCESS type', () => {
    const newUser = {
      email: 'arkafuuma@gmal.com',
      password: 'StrongPassword'
    };
    expect(
      lignupReducer(undefined, {
        type: actionTypes.LOGINSUCCESS,
        payload: newUser
      })
    ).toMatchObject({ user: newUser });
  });
});
