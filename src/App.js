import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';
import DesignPage from './Pages/DesignPage/DesignPage'
import MainPage from './Pages/Main_page/MainPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/registration" element={<RegistrationPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
