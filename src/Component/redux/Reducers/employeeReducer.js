import { ActionTypes } from "../Contant/action-type"

const initialState = {
  currentUser: null,
}
export const employeeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.USER_LOGIN:
      return { ...state, currentUser: payload }

    default:
      return state
  }
}
