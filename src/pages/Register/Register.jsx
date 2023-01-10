import TextField from "@mui/material/TextField";
import React from "react";
import "../Register/Register.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { signupApi } from "../../Services/userService";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;

const useStyle = makeStyles({
  mainDiv :{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw"
  },
  
  container: {
    height: "85vh",
    width: "45vw",
    border:" 2px solid  #dadce0" ,
    borderRadius: "25px",
    marginTop: "45px" ,
  },
  left :{
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems:" flex-start",
  },
  google: {
    width: "18%",
    marginLeft: "50px",
    marginTop: "50px"
  },
  googleImg: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent:" flex-start",
    alignItems: "flex-start",
  },
  spans :{
    color: "#202124",
    fontFamily: "Google Sans",
    fontSize: "24px",
    fontWeight: "400",
    lineHeight: "1.3333",
    wordBreak: "break-word",
    marginLeft: "50px"
  },
  names: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
     marginLeft: "50px",
     width:"80%"
  },
  userName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: "50px"
  },
  you: {
    display: "flex",
    flexDirection: "row",
    justifyContent:" flex-start",
    marginLeft: "60px",
    marginTop: "8px",
  },
  youC: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    fontSize: "15px",
    color:" #5f6368",
  },
  
  current: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  
  write: {
    color: "#1a73e8",
    fontFamily: "Google Sans, Roboto, Arial, sans-serif",
    fontSize: "15px",
    letterSpacing: "0.0107142857em",
    fontWeight: "500",
    marginLeft: "50px",
  }
  ,
  passbox :{
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: "50px",
  },
  letter: {
    display: "flex",
    flexDirection: "row",
    justifyContent:" flex-start"
  },
  use: {
    marginLeft: "60px",
    fontSize: "15px",
    color: "#5f6368",
    textAlign:"left"
  },
  bottom : {
    display: "flex",
    flexDirection: "row",
    justifyContent:" space-between",
    alignItems:" flex-start"
  },
  
  right: {
    display: "flex",
    flexDirection: "column",
    margin: "110px 4px 0px 10px",
  },
  logoside: {
    width: "244px",
    aspectRatio: "auto 244 / 244",
    height: "244px"
  },
  logotxt :{
    fontSize: "16px",
    fontWeight: "300",
    lineHeight:" 1.4286",
    color:" #202124",
    fontFamily: "roboto ,Noto Sans Myanmar UI",
    marginRight: "10px",
  },
  SecondDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  firstName:{
    marginTop:" 0.7", 
    width: "0.50",
    border: "1px solid red"
  },

    ['@media only screen and (min-width: 320px) and (max-width: 480px)']:{
      mainDiv :{
        width: "50vw"
      },
      container:{
        width: "40%",
        marginRight:"140px",
        border:"none",
       
      },
      googleImg:{
        width:"147%",
      
      }, 
      google:{
        marginLeft: "23px"
      },
      logoside:{
        display:"none"
      },
      logotxt:{
        display: "none"
      },
      spans:{
        marginLeft: "19px"
      },
      names:{
        display:"flex",
        flexDirection:"column",
        width:"90%",
        border:"2px solid red"

      },
      // firstName:{
      //   width:"40px",
        
      // }


    }
})

function Register() {
  const navigate = useNavigate()
  const classes = useStyle()

   const [signupobj, setsignupobj] = useState({
     firstName: "",
     lastName: "",
     email: "",
     password: "",
     service: "advance"
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

  const signin = () => {
		navigate('/')
	}

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
          navigate('/dashboard')
          
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // console.log(signupobj)
    //console.log("registered sucessfully");
  };

  return (
    <div className={classes.mainDiv}>

    <div className={classes.container}>
<div className={classes.SecondDiv}>
      <div className={classes.left}>
      <div className={classes.googleImg}>
        <img className={classes.google} src="../GoogleLogo.png" alt="error"></img>
        </div>
   
        <h3 className={classes.spans}>Create your Google Account</h3>
        <form>
        <div className={classes.names}>
        
          <TextField
            type="text"
            id={classes.firstName}
             sx={{ marginTop: 0.7, width: 0.39 }}
            fullWidth
            InputLabelProps={{ style: { fontSize: 13 } }}
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
            sx={{ marginTop: 0.7, marginLeft: 0.7,  width:  0.39 }}
            InputLabelProps={{ style: { fontSize: 13 } }}
            label="Last Name"
            variant="outlined"
            size="small"
            required
            onChange={takeLastname}
            error={regexobj.lnameBorder}
            helperText={regexobj.lnameHelper}
          />
          </div>
          <div className={classes.userName}>
          <TextField
            type="email"
            sx={{ marginTop: 4, width: 0.80 }}
            InputLabelProps={{ style: { fontSize: 13 } }}
            label="Username"
            size="small"
            required
            onChange={takeEmail}
            error={regexobj.emailBorder}
            helperText={regexobj.emailHelper}
          />
          </div>
          <div className={classes.you}>
          <span className={classes.youC}>You can use letters, numbers & periods</span>
          <br />
          </div>
          <br />
          <div className={classes.current}>

         <span className={classes.write}>Use my current email address instead</span> 
        
          </div>
          <div className={classes.passbox}>
          <TextField
            type="password"
            sx={{ marginTop: 4, width:     0.39 }}
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
            sx={{ marginTop: 4, marginLeft: 0.7, width:   0.39 }}
            InputLabelProps={{ style: { fontSize: 13 } }}
            label="Confirm"
            variant="outlined"
            size="small"
            required
          />
          </div>
        <div className={classes.letter}>
        <p className={classes.use}>Use 8 or more characters with a mix of letters, numbers & symbols </p>
        </div>
         
          <div className={classes.bottom}>
            <Button variant="text" className={classes.signButton} sx={{ marginLeft: 6}} onClick={signin} >Sign In Instead</Button>
            <Button variant="contained" className={classes.nextbutton} sx={{ marginRight: 12}} onClick={submit} > 
              NEXT
            </Button>
          </div>
          </form>
          </div>
          <div className={classes.right}>
          <img className={classes.logoside} src="../Sidelogo.png" alt="sidelogo"></img>
          <p className= {classes.logotxt} >One account. All of Fundoo working for you.</p>
            </div>
            
</div>
                </div>
        
  
    </div> 
 )
}

export default Register;
