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

