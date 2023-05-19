import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import CreateNote from "./CreateNote"; 
import Note from "./Note"
const App1=()=>
{ const [additem,setAdditem]=useState([]);
    const addNote=(note)=>{
      //  alert("i am clicked");
      setAdditem((prevData)=>{
        return [...prevData,note];
      });
      console.log(note);       
    };
    const onDelete=(id)=>{
        setAdditem((olddata)=>
        olddata.filter((currdata,indx)=>{
            return indx!==id; 
        })
        );
    };
    return (
    <>  
    <Header/>
   <CreateNote passNote={addNote}/>
   {additem.map((val,index)=>
   {
    return (<Note
    key={index}
    id={index}
    title={val.title}
    content={val.content}
    deleteItem={onDelete}
h
    />
    );
   })}
   <Footer/>
    </>
    );
};
export default App1;