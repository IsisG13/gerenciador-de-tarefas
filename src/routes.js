
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTarefa from './addTarefa';
import App from './App';

function Roteamento() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/AddTarefa" element={<AddTarefa/>} /> 
      </Routes>
    </Router>
  );
}

export default Roteamento;
