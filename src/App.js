import React from 'react';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contato from './Telas/Contato/Contato'
import Produtos from './Telas/Produtos/Produtos'

function App() {
  return (
    <Router>
        <nav>
          <Link to="/Contato">Contato</Link>
          <br/>
          <Link to="/Produtos">Produtos</Link>
          <Link to="/">Produtos</Link>
        </nav>
        <div style={{ textAlign: 'center' }}>
          <h1>Site em React</h1>
        </div>
        <Routes>
            <Route path="/Contato" element={<Contato />} />
            <Route path="/Produtos" element={<Produtos />} />
            <Route path="/" element={<Produtos />} />
        </Routes>
    </Router>
  );
}

export default App;

















/*
//npm install react-router-dom

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </Router>


<nav>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
    </nav>

    */