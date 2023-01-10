import React, { useState,useEffect } from 'react'
import Drawer1 from '../../Component/Drawer/drawer'
import Header from '../../Component/header/Header'
import Headermui from '../../Component/header/Headermui'
import Takenote1 from '../../Component/takeNote1/takeNote1'
import Takenote2 from '../../Component/takeNote2/takeNote2'
import Takenote3 from '../../Component/takeNote3/takeNote3'
import { getNoteAPI } from '../../Services/dataService'

function Dashboard() {

    const[toggle,settoggle] = useState(false)
    const [getNote,setGetNote] = useState([])
    const[headerState,setHeaderState] = useState(false)
    const [drawerState,setDrawerState]=useState('Notes')
    

   
    
 const openTakeNote2 = () => {
      settoggle(true)
  }

const closeTakeNote2 = () => {
settoggle(false)
}


const listenDrawer = (drawObj) => {
  setDrawerState(drawObj)
 }

const getNotes =() =>{
  getNoteAPI().then((response) => {
    let filterNote = [] 
    if(drawerState==='Notes')
    {
        filterNote = response.data.data.data.filter((notes) => {
            if(notes.isArchived===false && notes.isDeleted===false)
            return notes
        })
    }
    else if (drawerState==='Archive')
    {
        filterNote = response.data.data.data.filter((notes) => {
            if(notes.isArchived===true && notes.isDeleted===false)
            return notes
        })
    }
    else if (drawerState==='Trash')
    {
        filterNote = response.data.data.data.filter((notes) => {
            if(notes.isArchived===false && notes.isDeleted===true)
            return notes
        })
    }
    console.log(response)
    setGetNote(filterNote)
}).catch((error) => {
    console.log(error)
})
}

useEffect(()=>{
  getNotes()       
},[drawerState])

console.log(getNote)
    
const headerpart = () =>{
setHeaderState(!headerState)
}


  return (

    <div>
  <Headermui headerpart={headerpart} />

  <Drawer1  headerState={headerState} listenDrawer={listenDrawer}     />
     <div>
    {
      toggle ? <Takenote2  closeTakeNote2={closeTakeNote2} /> : <Takenote1 openTakeNote2={openTakeNote2} />
    }
    

    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',width:'70vw',position:'relative',left:'250px',height:'auto'}}>    
                {
                  
                     getNote.map((note)=>(<Takenote3 note={note}/>))
                   
                    
                }
            </div>
  
  </div>
  </div>


  )
}

export default Dashboard
