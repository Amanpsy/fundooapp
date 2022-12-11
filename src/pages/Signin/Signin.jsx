import React from "react";
import "../Signin/Signin.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import { loginApi } from "../../Services/userService";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyle = makeStyles({
  maindiv: {
    minHeight: "50vh",
    width: "32vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    padding: "1.5rem",
    boxSizing: "border-box",
    border: "1px solid #dadce0",
   
    marginTop:'290px'
  },
  forgot: {
    width: "94%",
    display: "flex",
    justifyContent: " flex-start",
    marginTop: "15px",
    color: "#4285f4",
  },
  guest: {
    width: "94%",
    marginTop: "20px",
    marginBottom: "35px",
    fontWeight: "lighter",
  },
  loginbutton: {
    textDecoration: "none",
    fontWeight: "softer",
    borderRadius: " 2px",
    padding: "5px 13px 7px 12px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  googleLogo: {
    width: 75,
    height: 24,
  },
  signin: {
    marginTop: " 10px",
    marginBottom: " 3px",
    fontWeight: "lighter",
  },
  use: {
    marginTop: "10px",
    fontWeight: " lighter",
  },

  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    maindiv: {
      width: "92vw",
      left: "160px",
    },
  },

  ["@media only screen and (min-width: 480px) and (max-width: 768px)"]: {
    maindiv: {
      width: "90vw",
      left: "250px",
      
    },
  },
  ["@media only screen and (min-width: 769px) and (max-width: 1024px)"]: {
    maindiv: {
      width: "57vw",
      left: "400px",
    },
  },
});

function Signin() {
  const classes = useStyle();

  const createAccount = () => {
    navigate("/signup");
  };

  const [signObj, setSignobj] = useState({
    email: " ",
    password: " ",
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

  const navigate = useNavigate();

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

          localStorage.setItem("token", response.data.data);
          navigate("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("Login sucessful");
    }
  };

  return (
    <div className={classes.maindiv}>
      <img
        className={classes.googleLogo}
        src="../GoogleLogo.png"
        alt="Google"
      ></img>
      <h2 className={classes.signin}>Sign in</h2>
      <h4 className={classes.use}>Use your Google Account</h4>

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
      <h5 className={classes.forgot}>Forgot Email or password?</h5>
      <h4 className={classes.guest}>
        Not your computer? Use Guest mode to sign in privately.
        <span> Learn more</span>
      </h4>
      <div className={classes.loginbutton}>
        <Button variant="text" size="small" onClick={createAccount}>
          Create account
        </Button>
        <Button variant="contained" size="small" onClick={loginSucessful}>
          Sign In{" "}
        </Button>
      </div>
    </div>
  );
}

export default Signin;
