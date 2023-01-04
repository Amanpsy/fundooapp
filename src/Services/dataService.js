import axios from "axios";

const headerConfig = {
    headers: {Authorization:localStorage.getItem('token')}

}
export const createNoteAPI  =(noteObj) => {
   
  
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',noteObj,headerConfig)
    return response
}

export const getNoteAPI =() => {
     
    let response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',headerConfig)
    return response
}

export const getArchievenoteAPI = (noteId) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",noteId,headerConfig)
    console.log('Archieved sucessfully')
    return response;
}


export const getUpdatenoteAPI = (noteData) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",noteData,headerConfig)
    console.log('Notes Updated sucessfully')
    return response;
}



export const trashNoteApi =(inputValue3) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",inputValue3,headerConfig)
    return response;
}

export const addColorApi =(inputFields1) => {
    let response =axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",inputFields1,headerConfig)
    return response;
}