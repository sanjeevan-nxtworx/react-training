import { ActionType } from "../action-types";
import { Action } from "../actions";

const initialState = 0;

export const bankReducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0;

    default:
      return state;
  }
};
