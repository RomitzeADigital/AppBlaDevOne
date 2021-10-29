import { types } from '../types/types';

const initialState = {
  redirectIndex: false,
  redirectIndexToReset: false,
};

export const redirectReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.redirectIndex:
      return {
        ...state,
        redirectIndex: action.payload,
      };
    case types.redirectIndexToReset:
      return {
        ...state,
        redirectIndexToReset: action.payload,
      };
    default:
      return state;
  }
};
