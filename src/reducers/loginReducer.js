import actionTypes from '../actions/actionTypes';

const initialState = {
  user: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGINFAIL:
      return { ...state, user: action.payload };
    case actionTypes.LOGINSUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
