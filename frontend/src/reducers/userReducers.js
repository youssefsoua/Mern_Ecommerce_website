import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/UserConstant'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { laoding: true }
    case USER_LOGIN_SUCCESS:
      return {
        laoding: false,
        userInfo: action.payload,
      }
    case USER_LOGIN_FAIL:
      return {
        laoding: false,
        error: action.payload,
      }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { laoding: true }
    case USER_REGISTER_SUCCESS:
      return {
        laoding: false,
        userInfo: action.payload,
      }
    case USER_REGISTER_FAIL:
      return {
        laoding: false,
        error: action.payload,
      }
    default:
      return state
  }
}
