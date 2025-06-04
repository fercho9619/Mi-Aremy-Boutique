import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import Footer from "./components/Footer";
import './App.css';

import Productos from "./pages/Productos";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="contenido-principal">
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />
        <Routes>
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
