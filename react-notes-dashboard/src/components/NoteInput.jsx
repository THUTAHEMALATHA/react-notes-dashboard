import { useState, useContext, useRef, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";

function NoteInput() {
  const [text, setText] = useState("");
  const { addNote } = useContext(NotesContext);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {
    if (!text.trim()) return;

    addNote(text);
    setText("");
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter note"
      />
      <button onClick={handleAdd}>Add Note</button>
    </div>
  );
}

export default NoteInput;