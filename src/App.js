import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import resumeData from './resumeData';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home resumeData={resumeData} />} />
          <Route path='/login' element={  <Login />  }/>
          <Route path='/signup' element={  <SignUp />  }/>
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;