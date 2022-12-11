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
import { Drawer } from "@mui/material";
import { Provider } from "react-redux";
import store from "./Component/Redux/store";
import Router1 from "./pages/Router/router";

function App() {
  return (
    <div className="App">
               
  
{/* <Dashboard /> */}
<Provider store={store}>
<Router1 ></Router1>
</Provider>


</div>
  );
}

export default App;
