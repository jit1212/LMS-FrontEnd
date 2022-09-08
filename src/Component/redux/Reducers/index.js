import { combineReducers } from "redux"
import { employeeReducer} from "./employeeReducer"

const reducer = combineReducers({
  employee: employeeReducer,

  
})
export default reducer
