const actionTypes = {
  LOADING: 'LOADING',
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
  SIGNUPFAIL: 'SIGNUPFAIL',
  SIGNUPSUCCESS: 'SIGNUPSUCCESS',
  BASEURL: `${process.env.BACKEND_DOMAIN}`,
  GET_TAGS: 'GET_TAGS',
  GET_MENU: 'GET_MENU'
};
export default actionTypes;
