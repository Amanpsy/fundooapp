import React from "react";
import "../Signin/Signin.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import { loginApi } from "../../Services/userService";
import { useNavigate, useNavigation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { color, fontFamily, fontSize } from "@mui/system";
import Router from "../../router/router";

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyle = makeStyles({
  pagewrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Open Sans, sans-serif",
  },

  maindiv: {
    minHeight: "60vh",
    width: "32vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    padding: "1.5rem",
    boxSizing: "border-box",
    border: "1px solid #dadce0",
    borderRadius: "10px",
  },

  signin: {
    marginTop: "10px",
    marginBottom: "3px",
    fontWeight: "lighter",
  },
  newlink: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },

  use: {
    marginTop: "10px",
    fontWeight: "lighter",
  },

  maindivinputboxinput: {
    width: "20vw",
    padding: "15px 30px",
    fontSize: "1rem",
    letterSpacing: " 0.062rem",
    marginBottom: "1.875rem",
    border: "1px solid #ccc",
    background: "transparent",
    borderRadius: "4px",
    margin: "12px auto 40px auto",
  },

  forgot: {
    width: "94%",
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "9px",
    color: "#1a73e8",
    fontWeight: "500",
    letterSpacing: ".25px",
    fontSize: "inherit",
    marginLeft: "9px",
  },

  guest: {
    width: "94%",
    marginTop: "20px",
    marginBottom: "68px",
    fontWeight: "lighter",
    color: "#5f6368",
    fontSize: "16px",
    lineHeight: "1.4286",
    marginRight: "53px",
  },
  buttonContainder: {
    width: "74%",
    display: "flex",
    justifyContent: " space-between",
    marginBottom: "20px",
  },
  buttonContaindera: {
    textDecoration: "none",
    fontWeight: "softer",
    borderRadius: "2px",
    padding: " 5px 13px 7px 12px",
  },
  learnstyle: {
    textDecoration: "none",
    borderRadius: "4px",
    color: "#1a73e8",
    display: "inline-block",
    fontWeight: "700",
    letterSpacing: ".25px",
    outline: "0",
    position: "relative",
  },
  learn: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  learnP: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  createbuttonhover: {
    color: "#366fca",
    backgroundColor: "#f6f9fe",
  },

  loginbutton: {
    backgroundColor: " #4285f4",
    color: "white",
    transition: "0.1s ease",
  },

  loginbuttonhover: {
    backgroundColor: " #1b66c9",
    boxSizing: " 0 1px 3px rgba(0,0,0,0.2)",
  },
  ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {

    pagewrapper:{
      width: "100vw"
    },
    maindiv:{
      width:"90%",
    border:"none",
    marginRight: "10px"
    },
    guest:{
position: "relative",
left:"20px"
    },
    learnstyle:{
      display:"none"
    },
    createaccountbtn:{
      position:"relative",
      left:"190px"
    },
    learnButton:{
      
    }
   


  },
  ['@media only screen and (min-width: 481px) and (max-width: 768px)']:{

    pagewrapper:{
      width: "100vw"
    },
    maindiv:{
      width:"90%",
    border:"none"
    },

  },
  ['@media only screen and (min-width: 769px) and (max-width: 1024px)']:{
    pagewrapper:{
      width: "100vw"
    },
    maindiv:{
      width:"90%",
   
    },
  }
});

function Signin() {
  const navigate = useNavigate()
  const classes = useStyle();

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

  const createAccount = () => {
    navigate('/signup')
}

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
          navigate('/dashboard')
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("Login sucessful");
    }
  };

  return (
    <div className={classes.pagewrapper}>
      <div className={classes.maindiv}>
        <img className="googleimg" src="../GoogleLogo.png" alt="Google"></img>
        <h2 className={classes.signin}>Sign in</h2>
        <h4 className={classes.use}>Use your Google Account</h4>
        
        
        <TextField
          type="email"
          
          sx={{ marginTop: 4, width: 0.92 }}
          InputLabelProps={{ style: { fontSize: 15 } }}
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
          InputLabelProps={{ style: { fontSize: 15 } }}
          label="Password"
          size="small"
          required
          onChange={takePassword}
          error={regexObj.passwordBorder}
          helperText={regexObj.passwordHelper}
        />
        <h5
          className={classes.forgot}
          sx={{ position: "relative", right: "110px" }}
        >
          Forgot Email?
        </h5>
        <h4 className={classes.guest}>
          Not your computer? Use Guest mode to sign in privately.
        </h4>
        <div className="learnP">
          <div className="learn" id="learnButton">
            <Button 
              variant="text"
              className="learnstyle"
              sx={{ position: "relative", right: "178px", bottom: "75px" }}
            >
              Learn more
            </Button>
          </div>
        </div>

        <div
          className="newLink"
          
        >
          <Button variant="text" className="createaccountbtn"    sx={{ position: "relative", right: "135px" }}  onClick={createAccount}>
            Create account
          </Button>

          <Button
             variant="contained"
            className="signBtn"
            size="small"
            onClick={loginSucessful}
          sx={{ position: "relative", left: "100px" }} >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
