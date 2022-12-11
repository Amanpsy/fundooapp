import axios from "axios";

const headerConfig = {
    headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}}



export const createNoteAPI  =(noteObj) => {
   
  
    let response = axios.post('https://localhost:44342/api/Note/CreateNote',noteObj,headerConfig)
    return response
}

export const getNoteAPI =() => {
     
    let response = axios.get('https://localhost:44342/api/Note/GetNote',headerConfig)
    return response
}

export const getArchievenoteAPI = (noteId) => {
    let response = axios.put(`https://localhost:44342/api/Note/Archieve?noteId=${noteId}`,noteId,headerConfig)
    console.log('Archieved sucessfully')
    return response;
}

export const deletenoteAPI=(noteId)=>{
    let response= axios.put(`https://localhost:44342/api/Note/Trash?noteId=${noteId}`,noteId,headerConfig)
    console.log("Notes Trashed")
    return response;
}


export const updatenoteAPI=(noteId,obj)=>{
    let response= axios.put(`https://localhost:44342/api/Note/UpdateNote?noteId=${noteId}`,headerConfig)
    console.log("Notes Updated sucessfully")
    return response;
}
export const updateColorAPI =(inputId,inputColor) => {
 
    let response = axios.put(` https://localhost:44342/api/Note/Colour?noteId=${inputId.noteId}&Colour=${inputColor.Colour}`,inputColor,headerConfig)
    return response;           
}

