import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Register from '../Register/Register'
import Signin from '../Signin/Signin'

function Router1() {
  return (
    <div>
      <Router>
        <Routes>
            <Route  exact path= '/' element={<Signin /> } />
            <Route path='/signup' element={<Register />}  />
            <Route path='/dashboard' element={<Dashboard /> } />
        </Routes>
      </Router>

    </div>
  )
}

export default Router1
