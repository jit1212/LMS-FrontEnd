// import axios from "axios";

// const signup = (email,password)=>{
//     return axios
//     .post("http://localhost:3008/employee/signUp",{
//         email,
//         password,
//     })
//     .then((response)=>{
//         console.log("***********************");
//         if(response.data.UserToken) {
//             localStorage.setItem("user",JSON.stringify(response.data));

//         }
//         return response.data;
//     });

// };

// const login = (Email,Password)=>{
//     return axios 
//     .post("http://localhost:3008/employee/signIn",{
//         Email,
//         Password
//     })
//     .then((response)=>{
//         if(response.data.UserToken) {
//             localStorage.setItem("user",JSON.stringify(response.data));
//             console.log("========================")
//             console.log(localStorage.setItem("user",JSON.stringify(response.data)));


//         }
//         return response.data;
//     });


// }
// const  logout =()=>{
//     localStorage.removeItem("user");
// };
// const getCurrentUser = ()=>{
//     return JSON.parse(localStorage.getItem("user"))
// }

// const  authService = {
//     signup,
//     login,
//     logout,
//     getCurrentUser
// };
// export default authService;