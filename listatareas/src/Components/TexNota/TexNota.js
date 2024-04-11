import React, { useState } from 'react';

function TexNota({ addNote }) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    addNote(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Que quieres recordar"
        value={text}
        onChange={handleChange}
      />
      <button type="submit">Agregar a la lista</button>
    </form>
  );
}

export default TexNota;