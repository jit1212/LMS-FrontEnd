import { combineReducers } from "redux"
import { employeeReducer } from "./employeeReducer"

const reducer = combineReducers({
  allEmployees: employeeReducer,
})
export default reducer
