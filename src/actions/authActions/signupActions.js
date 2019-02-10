import actionTypes from '../actionTypes';

export const signupFail = (message, ts) => ({
  type: actionTypes.SIGNUPFAIL,
  payload: { message, ts }
});

export const signupSuccess = message => ({
  type: actionTypes.SIGNUPSUCCESS,
  payload: message
});

export const signupUser = userData => {
  return function(dispatch) {
    fetch(`https://fast-food-reactify.herokuapp.com/api/v1/auth/signup`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(response => {
        if (response.message == 'signup successfull') {
          dispatch(signupSuccess(response.message));
        } else {
          dispatch(signupFail(response.message, new Date().getTime()));
        }
      });
  };
};

export default signupUser;
