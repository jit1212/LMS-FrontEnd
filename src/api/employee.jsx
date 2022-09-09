import { get, post } from "./utils/httpUtils"

export const login = async (email, password, dispatch = null) => {
  try {
    console.log(email,password,'cred==')
    const json = await post('/employee/signIn',{
      email,
      password
    })
    console.log(json,'log===')
       
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

export const register = async (email, password) => {
  try {
    const json = await post('/employee/signUp',{
      email,
      password
    })
    if(json) {
      return json;
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