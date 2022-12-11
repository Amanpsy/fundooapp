import TextField from "@mui/material/TextField";
import React from "react";
import "../Register/Register.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { signupApi } from "../../Services/userService";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;

const useStyle = makeStyles({
  box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      
      
     
  },
  container: {
      height: " 100%",
      border: " 1px solid #dadce0",
      borderRadius: " 8px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: '48px 40px'
  },
  left: {
      flex: 1,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    
     
      
  },
  right: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      height:' 100%',
      alignItems: 'center'
  },
  bottomLink: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "90%",
      marginTop: "2.5rem",
      borderRadius: " 2px",
      padding: "7px 13px 10px 17px",
  },
  googleLogo: {
      height: 24,
      width: 75,
      paddingLeft: "20px",
  },
  sidelogo: {
      width: 244,
      height: 244,
  },
  lefthead: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
  },
  text: {
      textAlign: "left",
      paddingLeft: "20px",
      color: "#202124",
      margin: "2rem 0",
      font: "24px",
  },
  textm: {
      textDecoration: "none",
      fontWeight: " 500",
      fontSize: "1rem",
      color: "#3498db",
      marginLeft: "2%",
  },

  spantext: {
      color: " gray",
      width: "100%",
      fontSize: " 0.8rem",
      marginLeft: "3%",
  },
  sidetext: {
      padding: "7px 13px 10px 17px",
  },
  fn: {
      flex : 1,
      marginRight: 4,
  },
  ln: {
      marginLeft: 4,
      flex : 1
  },
  mail: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginTop: '8px',
  },

  names: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: '100%',
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
      container: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          border: 'none',
          paddingTop:'24px '
      },

      fn: {
          margin: 0,
          marginBottom: '8px',
      },
      ln: {
          margin: 0
      },
      right: {
          display:'none'
      },
      names: {
          display: "flex",
          flexDirection: "column",
          padding: "0px 24px",
          width: '100%',
      },
      mail: {
          padding: "0px 24px",
          width: '100%',
      },
      pass: {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px 24px",
      },
      passinput: {
          marginBottom: '8px',
          width: '100%'
      }

  },
  ["@media only screen and (min-width: 480px) and (max-width: 769px)"]: {
   
      googleLogo: {
        padding: '20px'
        
    }
    },
  
});

function Register() {
  const classes = useStyle();

  // const [signupobj, setsignupobj] = useState({
  // 	firstName: "",
  // 	lastName: "",
  // 	email: "",
  // 	password: "",
  // 	service: "advance"
  //   });

  const [signupobj, setsignupobj] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

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

  const signin = () => {
    navigate("/");
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

  const navigate = useNavigate();

  const takePassword = (event) => {
    setsignupobj((prevstate) => ({
      ...prevstate,
      password: event.target.value,
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
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // console.log(signupobj)
    //console.log("registered sucessfully");
  };

  return (
    <div className={classes.box}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <div className={classes.lefthead}>
                        <img
                            className={classes.googleLogo}
                            src="../GoogleLogo.png"
                            alt="error"
                        />
                    </div>
                    <h3 className={classes.text}>Create your Google Account</h3>
                    <form>
                        <div className={classes.names}>
                            <div className={classes.fn}>
                                <TextField
                                    type="text"
                                    InputLabelProps={{ style: { fontSize: 13 } }} // font size of input label
                                    label="First name"
                                    variant="outlined"
                                    size="small"
                                    required
                                    onChange={takeFirstname}
                                    error={regexobj.fnameBorder}
                                    helperText={regexobj.fnameHelper}
                                    fullWidth
                                />
                            </div>
                            <div className={classes.ln}>
                                <TextField
                                    type="text"
                                    InputLabelProps={{ style: { fontSize: 13 } }}
                                    label="Last Name"
                                    variant="outlined"
                                    size="small"
                                    required
                                    onChange={takeLastname}
                                    error={regexobj.lnameBorder}
                                    helperText={regexobj.lnameHelper}
                                    fullWidth
                                />
                            </div>
                        </div>
                        <div className={classes.mail}>
                            <TextField
                                type="email"
                                InputLabelProps={{ style: { fontSize: 13 } }}
                                label="Username"
                                size="small"
                                required
                                onChange={takeEmail}
                                error={regexobj.emailBorder}
                                helperText={regexobj.emailHelper}
                                fullWidth
                            />
                        </div>
                        <span className={classes.spantext}>
              You can use letters, numbers & periods
            </span>
                        <br />
                        <br />
                        <a className={classes.textm} href="https://www.google.com/">
                            Use my current email address instead
                        </a>
                        <div className={classes.names}>
                            <div className={classes.fn}>
                                <TextField

                                    type="password"

                                    InputLabelProps={{ style: { fontSize: 13 } }}
                                    label="Password"
                                    onChange={takePassword}
                                    variant="outlined"
                                    size="small"
                                    required
                                    error={regexobj.passwordBorder}
                                    helperText={regexobj.passwordHelper}
                                    fullWidth
                                />

                            </div>
                            <div className={classes.ln}>

                                <TextField
                                    type="password"

                                    InputLabelProps={{ style: { fontSize: 13 } }}
                                    label="Confirm"
                                    variant="outlined"
                                    size="small"
                                    required
                                    fullWidth
                                />
                            </div>
                        </div>
                        <span className={classes.sidetext}>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </span>

                        <div className={classes.bottomLink}>
                            <Button variant="text" size="small" onClick={signin}>
                                Sign In instead
                            </Button>
                            <Button variant="contained" onClick={submit} size="small">
                                NEXT
                            </Button>
                        </div>
                    </form>
                </div>
                <div className={classes.right}>
                    <img
                        className={classes.sidelogo}
                        src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
                        alt="sidelogo"
                    />
                    <p>One account. All of Google working for you.</p>
                </div>
            </div>
        </div>
  );
}

export default Register;
