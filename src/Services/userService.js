import axios from "axios";

export const loginApi = (loginObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login',loginObj)
    return response
}

export const signupApi  =(registerobj) => {
   
  
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',registerobj)
    return response
}

 // let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp ',registerobj)