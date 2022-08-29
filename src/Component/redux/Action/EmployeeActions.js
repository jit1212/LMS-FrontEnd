import { ActionTypes } from "../Contant/action-type";
export const setEmployees = (employees)=>{
    return {
        type:ActionTypes.SET_EMPLOYEES,
        payload: employees, 
    };
};
export const selectEmployees = (employee)=>{
    
    return {
        type:ActionTypes.SELECTED_EMPLOYEES,
        payload: employee,
    };
};