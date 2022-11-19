import axios from "axios";

export const loginApi = (loginObj) => {
    let response = axios.post('https://localhost:44342/api/User/Login',loginObj)
    return response
}

export const signupApi  =(registerobj) => {
    // let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp ',registerobj)
  
     let response = axios.post('https://localhost:44342/api/User/Register',registerobj)
    return response
}