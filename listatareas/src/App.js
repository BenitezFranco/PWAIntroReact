import './App.css';
//import Home from './Home/Home';
import TexNota from './Components/TexNota/TexNota';
import ListaNota from './Components/ListaNota/ListaNota';
import React, { useState } from 'react';


function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    setNotes([...notes, { id: Date.now(), text, completed: false }]);
  };

  const toggleNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <h1>Notas</h1>
      <TexNota addNote={addNote} />
      <ListaNota notes={notes} toggleNote={toggleNote} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
