import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import actionTypes from '../actionTypes';
import {
  signupSuccess,
  signupUser,
  signupFail
} from '../authActions/signupActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('signup actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('should mock fetch api', () => {
    const store = mockStore({ user: {} });
    fetchMock.postOnce(
      'https://fast-food-reactify.herokuapp.com/api/v1/auth/signup',
      {
        headers: {
          'content-type': 'application/json'
        },
        body: {}
      }
    );
    store.dispatch(signupUser());
    expect(store.getActions()).toEqual([]);
  });

  it('should fetch SIGNUPSUCESS when registering user', () => {
    const response = 'signup successfull';
    const expectedActions = [
      {
        type: actionTypes.SIGNUPSUCCESS,
        payload: 'signup successfull'
      }
    ];
    const store = mockStore({ user: {} });
    store.dispatch(signupSuccess(response));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should fetch SIGNUPFAILURE for unregistered user ', () => {
    const failAction = [
      {
        type: actionTypes.SIGNUPFAIL,
        payload: 'username must be between 3 to 10 characters'
      }
    ];
    const usernameError = 'username must be between 3 to 10 characters';
    const store = mockStore({ user: {} });
    store.dispatch(signupFail(usernameError));
    expect(store.getActions()).toEqual(failAction);
  });
});
