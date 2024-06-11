import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Components/Header/header";
import Footer from "./Pages/Components/Footer/Footer";
import MainPage from "./Pages/Main_page/MainPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import LoginPage from './Pages/LoginPage/LoginPage'
import ProductPage from "./Pages/ProductPage/ProductPage";
import DesignPage from "./Pages/DesignPage/DesignPage";
import RoomsPage from "./Pages/RoomsPage/RoomsPage"

import './App.css'
import IdeaPage from "./Pages/Idea_Page/IdeaPage";

function App() {
  const [currentPage, setCurrentPage] = useState("/");

  return (
    <BrowserRouter>
    <div className="App">
    {(currentPage !== "registration" && currentPage !== 'login' && currentPage !=='/' && currentPage != '/design')  && <Header />}
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={<MainPage setCurrentPage={setCurrentPage} />}
          />
          <Route
            exact
            path="/registration"
            element={<RegistrationPage setCurrentPage={setCurrentPage} />}
          />

          <Route
            exact
            path="/login"
            element={<LoginPage setCurrentPage={setCurrentPage} />}
          />

          <Route
          exact path = "/ideas"
          element = {<IdeaPage setCurrentPage = {setCurrentPage}/>}
          />  

          <Route
          exact path = "/products"
          element = {<ProductPage setCurrentPage = {setCurrentPage}/>}
          />
          <Route
          exact path = "/rooms"
          element = {<RoomsPage setCurrentPage = {setCurrentPage}/>}
          />

          <Route
          exact path = "/design"
          element = {<DesignPage setCurrentPage = {setCurrentPage}/>}
          />
        </Routes>
      </div>
      {(currentPage !== "registration" && currentPage !== 'login')  && <Footer />}
    </div>
    </BrowserRouter>
  );
} 

export default App;
