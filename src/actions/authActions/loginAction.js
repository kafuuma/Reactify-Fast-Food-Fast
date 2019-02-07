import actionTypes from '../actionTypes';

export const LoginFail = data => ({
  type: actionTypes.LOGINFAIL,
  payload: data
});

export const LoginSuccess = response => ({
  type: actionTypes.LOGINSUCCESS,
  payload: response
});

export const LoginUser = userData => {
  return function(dispatch) {
    fetch(`https://fast-food-reactify.herokuapp.com/api/v1/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(response => {
        if (response.message == 'login successfull') {
          dispatch(LoginSuccess(response));
        } else {
          dispatch(LoginFail(response));
        }
      });
  };
};

export default LoginUser;
