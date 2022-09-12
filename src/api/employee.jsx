import { get, post, put } from "./utils/httpUtils"

export const login = async (email, password, dispatch = null) => {
  try {
    console.log(email,password,'cred==')
    const json = await post('/employee/signIn',{
      email,
      password
    })
       
    if(json) {
      if(dispatch) {
        dispatch({})
      }
      return json;
    }
  } catch (e) {
    console.log('Error with login: ',e)
  }
}

export const register = async (body) => {
  try {
    const json = await post('/employee/signUp',body)
    if(json?.data) {
      return json?.data;
    }
  } catch (e) {
    console.log('Error with register: ',e)
  }
}

export const view = async () =>{
  try {
    const json = await get('/employee/getAllEmp')
    if(json){
      return json
    }
  }
  catch {

  }
  
}

export const loadEmpolyee = async () => {
  try {
    const json = await get('/employee/getAllEmp');
    if(json) {
      return json;
    }
  } catch (e) {
    console.log('Error with register: ',e)
  }
}

export const getSingleEmployee = async (Id)=>{
  try{
    const json = await get(`/employee/allEmpDetails?Id=${Id}`);
    console.log(json.data,"get single");
    if(json?.data) {
      return json.data
    }
  }
  catch (e){
    console.log('Error with SingleEmployee');

  }
}
export const updateEmployee = async (Id,body)=>{
  try{
    const json = await put(`/employee/update?Id=${Id}`,body);
    console.log(json.data,"Update Employee");
    if(json?.data) {
      return json.data
    }
  }
  catch (e){
    console.log('Error with UpdateEmployee');

  }
}