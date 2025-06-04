import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import Footer from "./components/Footer";
import './App.css';

import Bolsas from "./pages/Bolsas";
import Zapatos from "./pages/Zapatos";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="contenido-principal">
        <ItemListContainer greeting="¡Bienvenido a Mi Aremy tienda online!" />
        <Routes>
          <Route path="/bolsas" element={<Bolsas />} />
          <Route path="/zapatos" element={<Zapatos />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
