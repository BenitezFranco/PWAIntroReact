import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Paginas/Home/Home';
import DetalleReceta from './Paginas/DetalleRecetas/DetalleRecetas';
//       
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/receta/:id" element={<DetalleReceta />} />
      </Routes>
    </Router>
  );
}

export default App;
