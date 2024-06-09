import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Components/Header/header";
import Footer from "./Pages/Components/Footer/Footer";
import MainPage from "./Pages/Main_page/MainPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import LoginPage from './Pages/LoginPage/LoginPage'
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {
  const [currentPage, setCurrentPage] = useState("/");

  return (
    <BrowserRouter>
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
          exact path = "/products"
          element = {<ProductPage setCurrentPage = {setCurrentPage}/>}
          />
        </Routes>
      </div>
      {(currentPage !== "registration" && currentPage !== 'login')  && <Footer />}
    </BrowserRouter>
  );
} 

export default App;
