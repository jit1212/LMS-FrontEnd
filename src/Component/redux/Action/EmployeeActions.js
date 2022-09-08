import { ActionTypes } from "../Contant/action-type";
export const setEmployees = (employees)=>{
    return {
        type:ActionTypes.SET_EMPLOYEES,
        payload: employees, 
    };
};
export const removeEmployees = (employees)=>{
    return {
        type:ActionTypes.REMOVESELECTED_EMPLOYEES,
        payload: employees, 
    };
};
export const selectEmployees = (employee)=>{
    
    return {
        type:ActionTypes.SELECTED_EMPLOYEES,
        payload: employee,
    };
};
export const selectBankDetails = (employee)=>{
    
    return {
        type:ActionTypes.EMPLOYEE_BANK_DETAILS,
        payload: employee,
    };
};
export const selectSalaryDetails = (employee)=>{
    
    return {
        type:ActionTypes.EMPLOYEE_SALARY,
        payload: employee,
    };
};
export const selectBondDetails = (employee)=>{
    
    return {
        type:ActionTypes.EMPLOYEE_BOND,
        payload: employee,
    };
};