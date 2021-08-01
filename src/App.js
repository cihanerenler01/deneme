import React, { useState, useEffect } from "react";
import axios from "axios";

import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((res) => setNotes(res.data));
  });

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      note: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        Show {showAll ? "important" : "all"} notes
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
