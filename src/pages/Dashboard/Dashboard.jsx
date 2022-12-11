import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import Drawer1 from "../../Component/Drawer/drawer";
import Header from "../../Component/header/Header";
import Takenote1 from "../../Component/takeNote1/takeNote1";
import Takenote2 from "../../Component/takeNote2/takeNote2";
import Takenote3 from "../../Component/takeNote3/takeNote3";
import { getNoteAPI } from "../../Services/dataService";

const useStyle = makeStyles({
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    notesdiv: {
      left: "60px",
      width: '100%',
      height: '100%',
      display:'flex',
      flexDirection:'column',
      alignItems: 'center'
      
    },



  },
  ["@media only screen and (min-width: 481px) and (max-width: 768px)"]: {
    notesdiv: {
      left: "49%",
     
    },
    

  }
});

function Dashboard() {
  const [toggle, settoggle] = useState(false);
  const [getNote, setGetNote] = useState([]);
  const [headerState, setHeaderState] = useState(false);
  const [noteChoice, setNotechoice] = useState("Notes");

  const designDrawer = (noteOpt) => {
    setNotechoice(noteOpt);
  };

  const openTakeNote2 = () => {
    settoggle(true);
  };

  const closeTakeNote2 = () => {
    settoggle(false);
  };

  const getNotes = () => {
    getNoteAPI()
      .then((response) => {
        let filterNote = [];
        if (noteChoice === "Notes") {
          filterNote = response.data.data.filter((notes) => {
            if (notes.archive === false && notes.trash === false) {
              return notes;
            }
          });
        } else if (noteChoice === "Archieve") {
          filterNote = response.data.data.filter((notes) => {
            if (notes.archive === true && notes.trash === false) {
              return notes;
            }
          });
        } else if (noteChoice === "Bin") {
          filterNote = response.data.data.filter((notes) => {
            if (notes.archive === false && notes.trash === true) {
              return notes;
            }
          });
        }
        console.log(response);
        setGetNote(filterNote);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Notes List");
  };

  const autoRefresh = () => {
    getNote();
  };

  useEffect(() => {
    getNotes();
  }, [noteChoice]);

  const headerpart = () => {
    setHeaderState(!headerState);
  };
  const classes = useStyle();

  return (
    <div>
      <Header headerpart={headerpart} />

      <Drawer1 designDrawer={designDrawer} headerState={headerState} />
      <div>
        {toggle ? (
          <Takenote2 closeTakeNote2={closeTakeNote2} />
        ) : (
          <Takenote1 openTakeNote2={openTakeNote2} />
        )}

        <div
          className={classes.notesdiv}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "70vw",
            position: "relative",
            left: "200px",
            height: "auto",
          }}
        >
          {getNote.map((note) => (
            <Takenote3 note={note} autoRefresh={autoRefresh} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
