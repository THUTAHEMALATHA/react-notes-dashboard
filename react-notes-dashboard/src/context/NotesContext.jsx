import { createContext, useState, useEffect } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
  const saved = localStorage.getItem("notes");
  const savedNotes = saved ? JSON.parse(saved) : [];
  setNotes(savedNotes);
}, []);
useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text: text
    };

    setNotes([...notes, newNote]);
  };

  return (
    <NotesContext.Provider
      value={{ notes, addNote, selectedNote, setSelectedNote }}
    >
      {children}
    </NotesContext.Provider>
  );
};