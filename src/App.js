import React from 'react';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contato from './Telas/Contato/Contato'
import Produtos from './Telas/Produtos/Produtos'

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Meu App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <Link to="/Produtos" className="nav-link">Produtos</Link>
              </li>
              <li className="nav-item">
                <Link to="/Clientes" className="nav-link">Clientes</Link>
              </li>
              <li className="nav-item">
                <Link to="/Vendas" className="nav-link">Vendas</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contato" className="nav-link">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container mt-3'>
        <Routes>
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Produtos" element={<Produtos />} />
          <Route path="/" element={<Produtos />} />
        </Routes>
      </div>

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