import TextField from "@mui/material/TextField";
import React from "react";
import "../Register/Register.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { signupApi } from "../../Services/userService";

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
function Register() {
	const [signupobj, setsignupobj] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		service: "advance"
	  });

//   const [signupobj, setsignupobj] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

  const [regexobj, setregexobj] = useState({
    fnameBorder: false,
    fnameHelper: "",
    lnameBorder: false,
    lnameHelper: "",
    emailBorder: false,
    emailHelper: "",
    passwordBorder: false,
    passwordHelper: "",
  });

  const takeFirstname = (event) => {
    console.log(event.target.value);
    setsignupobj((prevstate) => ({
      ...prevstate,
      firstName: event.target.value,
    }));
  };
  const takeLastname = (event) => {
    setsignupobj((prevstate) => ({
      ...prevstate,
      lastName: event.target.value,
    }));
    console.log(event.target.value);
  };
  const takeEmail = (event) => {
    console.log({ email: event.target.value });
    setsignupobj((prevstate) => ({
      ...prevstate,
      email: event.target.value,
    }));
  };
  const takePassword = (event) => {
    setsignupobj((prevstate) => ({
      ...prevstate,
      password:event.target.value,
    }));
    console.log(event.target.value);
  };
  const submit = () => {
    console.log(signupobj);
    let fNameTest = fnameRegex.test(signupobj.firstName);
    let lNameTest = fnameRegex.test(signupobj.lastName);
    let emailTest = emailRegex.test(signupobj.email);
    let passwordTest = passwordRegex.test(signupobj.password);
    if (fNameTest === false) {
      setregexobj((prevstate) => ({
        ...prevstate,
        fnameBorder: true,
        fnameHelper: "Enter a valid firstname",
      }));
    } else if (fNameTest === true) {
      setregexobj((prevstate) => ({
        ...prevstate,
        fnameBorder: false,
        fnameHelper: "",
      }));
    }

    if (lNameTest === false) {
      setregexobj((prevstate) => ({
        ...prevstate,
        lnameBorder: true,
        lnameHelper: "Enter a valid lastname",
      }));
    } else if (lNameTest === true) {
      setregexobj((prevstate) => ({
        ...prevstate,
        lnameBorder: false,
        lnameHelper: "",
      }));
    }

    if (emailTest === false) {
      setregexobj((prevstate) => ({
        ...prevstate,
        emailBorder: true,
        emailHelper: "Enter a valid email address",
      }));
    } else if (emailTest === true) {
      setregexobj((prevstate) => ({
        ...prevstate,
        emailBorder: false,
        emailHelper: "",
      }));
    }

    if (passwordTest === false) {
      setregexobj((prevstate) => ({
        ...prevstate,
        passwordBorder: true,
        passwordHelper: "Enter a valid password",
      }));
    } else if (passwordTest === true) {
      setregexobj((prevstate) => ({
        ...prevstate,
        passwordBorder: false,
        passwordHelper: "",
      }));
    }

    if (
      fNameTest === true &&
      lNameTest === true &&
      emailTest === true &&
      passwordTest === true
    ) {
      signupApi(signupobj)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // console.log(signupobj)
    // console.log("registered sucessfully");
  };

  return (
    <div className="container">
      <div className="left">
        <img src="../GoogleLogo.png" alt="error"></img>
        <h3>Create your Google Account</h3>
        <form>
          <TextField
            type="text"
            sx={{ marginTop: 0.7, width: 0.49 }}
            InputLabelProps={{ style: { fontSize: 13 } }} // font size of input label
            label="First Name"
            variant="outlined"
            size="small"
            required
            onChange={takeFirstname}
            error={regexobj.fnameBorder}
            helperText={regexobj.fnameHelper}
          />

          <TextField
            type="text"
            sx={{ marginTop: 0.7, marginLeft: 0.7, width: 0.49 }}
            InputLabelProps={{ style: { fontSize: 13 } }}
            label="Last Name"
            variant="outlined"
            size="small"
            required
            onChange={takeLastname}
            error={regexobj.lnameBorder}
            helperText={regexobj.lnameHelper}
          />
          <TextField
            type="email"
            sx={{ marginTop: 4, width: 0.99 }}
            InputLabelProps={{ style: { fontSize: 13 } }}
            label="Username"
            size="small"
            required
            onChange={takeEmail}
            error={regexobj.emailBorder}
            helperText={regexobj.emailHelper}
          />
          <span>You can use letters, numbers & periods</span>
          <br />
          <br />
          <a href="https://www.google.com/">
            Use my current email address instead
          </a>

          <TextField
            type="password"
            sx={{ marginTop: 4, width: 0.49 }}
            InputLabelProps={{ style: { fontSize: 13 } }}
            label="Password"
            onChange={takePassword}
            variant="outlined"
            size="small"
            required
            error={regexobj.passwordBorder}
            helperText={regexobj.passwordHelper}
          />
          <TextField
            type="password"
            sx={{ marginTop: 4, marginLeft: 0.7, width: 0.49 }}
            InputLabelProps={{ style: { fontSize: 13 } }}
            label="Confirm"
            variant="outlined"
            size="small"
            required
          />
          <span>
            Use 8 or more characters with a mix of letters, numbers & symbols
          </span>

          <div className="bottom-link">
            <Button variant="text">Sign In instead</Button>
            <Button variant="contained" onClick={submit}>
              NEXT
            </Button>
          </div>
        </form>
      </div>
      <div className="right">
        <img src="../Sidelogo.png" alt="sidelogo"></img>
        <p>One account. All of Fundoo working for you.</p>
      </div>
    </div>
  );
}

export default Register;
