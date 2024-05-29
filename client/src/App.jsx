import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Disclaimer from "./Components/Disclaimer";
import Hero from "./Pages/Hero";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Disclaimer />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
