import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import NotesCount from "./components/NotesCount";

function App() {
  return (
    <div>
      <h1>Notes Dashboard</h1>

      <NoteInput />
      <NotesList />
      <NotesCount />
    </div>
  );
}

export default App;