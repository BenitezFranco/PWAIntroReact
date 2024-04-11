import React from 'react';

function ListaNota({ notes, toggleNote, deleteNote }) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <input
            type="checkbox"
            checked={note.completed}
            onChange={() => toggleNote(note.id)}
          />
          <span style={{ textDecoration: note.completed ? 'line-through' : 'none' }}>
            {note.text}
          </span>
          <button onClick={() => deleteNote(note.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaNota;
