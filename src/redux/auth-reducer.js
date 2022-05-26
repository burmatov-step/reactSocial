const SET_USER_DATA = 'SET_USER_DATA';

const inititalState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

export const authReducer = (state = inititalState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
 
    default:
      return state
  }
}


export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data:{userId, email, login} })

export default authReducer