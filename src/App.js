
import './App.css';
import React from 'react';
import Header from './Component/header/Header';
import Takenote1 from './Component/takeNote1/takeNote1';
import Takenote2 from './Component/takeNote2/takeNote2';
import Takenote3 from './Component/takeNote3/takeNote3';

//import Register from './pages/Register/Register';
// import Signin from './pages/Signin/Signin';



function App() {
  return (
    <div className="App">

        {/* <Register></Register>     */}
<Takenote3></Takenote3>
      <Header>  </Header>
     {/* <Signin> </Signin>;   */}
        <Takenote1></Takenote1>
       <Takenote2> </Takenote2>  
    </div>
  );
}

export default App;
