import axios from "axios";
import { getToken } from "../getToken";

export const post = async (url,body) => {
  return await http(url,'post',body);
}

export const get = async (url,body)=>{
  return await http(url,'post')
}


const http = async (url,method,body) => {
  const token = getToken();
  console.log(token,'===')
  try {
    if(method === 'post' || method === 'delete' || method === 'put') {
      const res = await axios[method]("http://localhost:3008" + url,
      body,
      {
        headers:{
          "Contents-Type": "application/json",
          authorization: `Barer ${token}`
        }
      })
      console.log(res,'res====')
      const json = res.data;
      return json;
    } else {
      const res = await axios[method]("http://localhost:3008" + url,
      {
        headers:{
          "Contents-Type": "application/json",
          authorization: `Barer ${token}`
        }
      })
      const json = res.data;
      return json
    }
  } catch (e) {
      console.log("Error with Utilfile: ",e)
  }
}