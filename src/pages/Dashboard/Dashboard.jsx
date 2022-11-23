import React, { useState,useEffect } from 'react'
import Drawer1 from '../../Component/Drawer/drawer'
import Header from '../../Component/header/Header'
import Takenote1 from '../../Component/takeNote1/takeNote1'
import Takenote2 from '../../Component/takeNote2/takeNote2'
import Takenote3 from '../../Component/takeNote3/takeNote3'
import { getNoteAPI } from '../../Services/dataService'

function Dashboard() {

    const[toggle,settoggle] = useState(false)
    const [getNote,setGetNote] = useState([])
    const[headerState,setHeaderState] = useState(false)
    
    
 const openTakeNote2 = () => {
      settoggle(true)
  }

const closeTakeNote2 = () => {
settoggle(false)
}
 

const getNotes =() =>{
  getNoteAPI()
      .then((response)=>{console.log(response)
        // setGetNote(response)
      })
      .catch((error)=>{console.log(error)})
      console.log('NotesList')

}

useEffect(()=>{
  getNotes()       
},[])
    
const headerpart = () =>{
setHeaderState(!headerState)
}

  return (

    <div>
  <Header headerpart={headerpart} />
  <Drawer1  headerState={headerState}/>
     <div>
    {
      toggle ? <Takenote2 closeTakeNote2={closeTakeNote2} /> : <Takenote1 openTakeNote2={openTakeNote2} />
    }
    
    <div>
                {
                    getNote.map((notes)=>(<Takenote3/>))
                }
            </div>
  
      </div>
  
</div>


  )
}

export default Dashboard
