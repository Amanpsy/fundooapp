import "./App.css";
import React from "react";
 import Header from "./Component/header/Header";
import Takenote1 from "./Component/takeNote1/takeNote1";
import Takenote2 from "./Component/takeNote2/takeNote2";
//import Takenote3 from "./Component/takeNote3/takeNote3";
//import Dashboard from "./pages/Dashboard/Dashboard";
//import CheckBoxOutlined from "@mui/icons-material/CheckBoxOutlined";
//import { CheckBox } from "@mui/icons-material";
import Register from './pages/Register/Register';
import Dashboard from "./pages/Dashboard/Dashboard";
 import Signin from './pages/Signin/Signin';
import Takenote3 from "./Component/takeNote3/takeNote3";

function App() {
  return (
    <div className="App">
              
  <Dashboard></Dashboard>  
  {/* <Signin></Signin> */}
  
     
  {/* <Takenote3></Takenote3>  */}


    
</div>
  );
}

export default App;
