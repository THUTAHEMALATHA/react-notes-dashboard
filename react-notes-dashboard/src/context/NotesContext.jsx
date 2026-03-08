import { createContext, useState, useEffect, use } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({children}) =>{
    const [notes, setNotes] = useState();
    const [selectedNote, setselectedNote]=useState(null);

    useEffect(()=>{
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        setNotes(savedNotes);
    },[]);

    useEffect(()=>{
        (localStorage.setItem("notes", JSON.stringify(notes))) || [];
        setNotes(notes);
    },[notes]);

    const addNote = (text)=>{
        const newNote = {
            id: Date.now(),
            text
        };
        setNotes([...notes, newNote]);

        return(
            <NotesContext.Provider
            value={{notes,addNote,selectedNote,setselectedNote}}>
                {children}</NotesContext.Provider>
        )
    }
}