import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import actionTypes from '../actionTypes';
import { LoginSuccess, LoginUser, LoginFail } from '../authActions/loginAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('login actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('should mock fetch api', () => {
    const store = mockStore({ user: {} });
    fetchMock.postOnce(
      'https://fast-food-reactify.herokuapp.com/api/v1/auth/login',
      {
        headers: {
          'content-type': 'application/json'
        },
        body: {}
      }
    );
    store.dispatch(LoginUser());
    expect(store.getActions()).toEqual([]);
  });

  it('should fetch LoginSuccess when registering user', () => {
    const response = 'login successfull';
    const expectedActions = [
      {
        type: actionTypes.LOGINSUCCESS,
        payload: 'login successfull'
      }
    ];
    const store = mockStore({ user: {} });
    store.dispatch(LoginSuccess(response));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should fetch LoginFailure for unregistered user ', () => {
    const failAction = [
      {
        type: actionTypes.LOGINFAIL,
        payload: 'user doesnot exist'
      }
    ];
    const userError = 'user doesnot exist';
    const store = mockStore({ user: {} });
    store.dispatch(LoginFail(userError));
    expect(store.getActions()).toEqual(failAction);
  });
});
