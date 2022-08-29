import { ActionTypes } from "../Contant/action-type"

const initialState = {
  employees: [],
}
export const employeeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_EMPLOYEES:
      return { ...state, employees: payload }
    default:
      return state
  }
}
