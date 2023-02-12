import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Singup from './components/signup/Singup';

import Signup from './components/signup/Singup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup/>} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
