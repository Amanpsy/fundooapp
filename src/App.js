import "./App.css";
import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Router from "./router/router";
import { Provider } from "react-redux";
import store from "./Component/Redux/store";

function App() {
  return (
    <div className="App">

    <Provider store={store}>
    <Router />
   </Provider>   

    
</div>
  );
}

export default App;
