import actionTypes from '../actions/actionTypes';

const initialState = {
  user: {},
  time_flag: ''
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUPFAIL:
      return {
        ...state,
        user: action.payload.message,
        time_flag: action.payload.ts
      };
    case actionTypes.SIGNUPSUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
