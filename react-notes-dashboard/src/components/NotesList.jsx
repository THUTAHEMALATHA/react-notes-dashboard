import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

function NotesList() {
  const { notes, selectedNote, setSelectedNote } = useContext(NotesContext);

  return (
    <ul>
      {notes.map((note) => (
        <li
          key={note.id}
          onClick={() => setSelectedNote(note.id)}
          style={{
            background: selectedNote === note.id ,
            cursor: "pointer"
          }}
        >
          {note.text}
        </li>
      ))}
    </ul>
  );
}

export default NotesList;