import { ActionTypes } from "../Contant/action-type"

const initialState = {
  employees: [],
  selectedEployee: [],
  employeeBankDetail:[],
  employeeSalary:null,
  employeeBond:null,
}
export const employeeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_EMPLOYEES:
      return { ...state, employees: payload }
      
    case ActionTypes.SELECTED_EMPLOYEES:
      return { ...state,  selectedEployee: payload }
        
    case ActionTypes.EMPLOYEE_BANK_DETAILS:
      return { ...state,  employeeBankDetail: payload }
          
    case ActionTypes.EMPLOYEE_SALARY:
      return { ...state,  employeeSalary : payload }

    case ActionTypes.EMPLOYEE_BOND:
      return { ...state,  employeeBond:payload }

    default:
      return state
  }
}
