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
import { Provider } from "react-redux";
import store from "./Component/Redux/store";

function App() {
  return (
    <div className="App">

     <Provider store={store}>
     <Dashboard />
    </Provider>


    
</div>
  );
}

export default App;
