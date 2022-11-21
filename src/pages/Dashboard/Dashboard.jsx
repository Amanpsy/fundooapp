import React, { useState,useEffect } from 'react'
import Header from '../../Component/header/Header'
import Takenote1 from '../../Component/takeNote1/takeNote1'
import Takenote2 from '../../Component/takeNote2/takeNote2'
import Takenote3 from '../../Component/takeNote3/takeNote3'
import { getNoteAPI } from '../../Services/dataService'

function Dashboard() {

    const[toggle,settoggle] = useState(false)

const [getNote, setGetNote] = useState([])


    const openTakeNote2 = () => {
        settoggle(true)
    }


const closeTakeNote2 = () => {
  settoggle(false)
}

useEffect(()=>{
  getNoteAPI()
  .then((response)=>{console.log(response)
    setGetNote(response.data.data)
  })
  .catch((error)=>{console.log(error)})
  console.log('Notes List ')
},[])

  return (

    <div>
  <Header></Header>
  
     <div>
    {
      toggle ? <Takenote2 closeTakeNote2={closeTakeNote2} /> : <Takenote1 openTakeNote2={openTakeNote2} />
    }
    
    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',width:'70vw',position:'relative',left:'200px'}}>
                {
                    getNote.map((note)=>(<Takenote3 note={note}/>))
                }
            </div>
  
      </div>
  
</div>


  )
}

export default Dashboard
