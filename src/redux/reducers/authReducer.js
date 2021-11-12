import { types } from '../types/types';

const initialState = {
  userData: {},
  uid: {},
  name: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.name,
      };
    case types.user:
      return {
        ...state,
        userData: action.payload,
      };
    case types.logout:
      return {
        ...state,
        userData: {},
        uid: {},
        name: {},
      };
    default:
      return state;
  }
};
