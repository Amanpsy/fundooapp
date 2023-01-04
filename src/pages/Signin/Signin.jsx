import React from "react";
import "../Signin/Signin.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import { loginApi } from "../../Services/userService";

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signin() {
  const [signObj, setSignobj] = useState({
    email: " ",
    password: " ",
    service: "advance",
  });

  const [regexObj, setRegexobj] = useState({
    emailBorder: false,
    emailHelper: " ",
    passwordBorder: false,
    passwordHelper: " ",
  });
  const takeEmail = (event) => {
    console.log(event.target.value);
    setSignobj((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const takePassword = (event) => {
    console.log(event.target.value);

    setSignobj((prevState) => ({ ...prevState, password: event.target.value }));
  };

  const loginSucessful = () => {
    console.log(signObj);
    let checkEmail = emailRegex.test(signObj.email);
    let checkPassword = passwordRegex.test(signObj.password);
    if (checkEmail === true) {
      setRegexobj((prevState) => ({
        ...prevState,
        emailBorder: false,
        emailHelper: "",
      }));
    } else if (checkEmail === false) {
      setRegexobj((prevState) => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "Enter valid email",
      }));
    }

    if (checkPassword === true) {
      setRegexobj((prevState) => ({
        ...prevState,
        emailBorder: false,
        emailHelper: "",
      }));
    } else if (checkPassword === false) {
      setRegexobj((prevState) => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "Enter valid passsword",
      }));
    }

    if (checkEmail === true && checkPassword === true) {
      loginApi(signObj)
        .then((response) => {
          console.log(response);

          localStorage.setItem("token", response.data.id);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("Login sucessful");
    }
  };

  return (
    <div className="pagewrapper">
    <div className="maindiv">
      <img src="../GoogleLogo.png" alt="Google"></img>
      <h2 className="signin">Sign in</h2>
      <h4 className="use">Use your Google Account</h4>

      {/* <div className="inputbox"> 
         <input type="email" name="email" placeholder='Email' required/>  
          </div> 
         <div className="inputbox">
        <input type="password" name="password" placeholder='Password' required />  
        </div>  */}
      <TextField
        type="email"
        sx={{ marginTop: 4, width: 0.92 }}
        InputLabelProps={{ style: { fontSize: 13 } }}
        label="Email ID"
        size="small"
        required
        onChange={takeEmail}
        error={regexObj.emailBorder}
        helperText={regexObj.emailHelper}
      />
      <TextField
        type="password"
        sx={{ marginTop: 4, width: 0.92 }}
        InputLabelProps={{ style: { fontSize: 13 } }}
        label="Password"
        size="small"
        required
        onChange={takePassword}
        error={regexObj.passwordBorder}
        helperText={regexObj.passwordHelper}
      />
      <h5 className="forgot">Forgot Email or password?</h5>
      <h4 className="guest">
        Not your computer? Use Guest mode to sign in privately.
        <span> Learn more</span>
      </h4>
      <div className="signinlink">
        <Button variant="text" size="small" onClick={loginSucessful}>
          Sign In{" "}
        </Button>
      </div>
    </div>
    </div>
  );
}

export default Signin;
