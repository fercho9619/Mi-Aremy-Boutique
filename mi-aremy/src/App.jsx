import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Productos from "./pages/Productos";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="contenido-principal">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="titulo-inicio">Mi Aremy Boutique</h1>
                <section className="productos-principales">
                  <div className="producto">
                    <img src="/imagenes/producto1.jpg" alt="Producto 1" />
                    <p>Producto 1: Descripción breve.</p>
                  </div>
                  <div className="producto">
                    <img src="/imagenes/producto2.jpg" alt="Producto 2" />
                    <p>Producto 2: Descripción breve.</p>
                  </div>
                  <div className="producto">
                    <img src="/imagenes/producto3.jpg" alt="Producto 3" />
                    <p>Producto 3: Descripción breve.</p>
                  </div>
                </section>
                <p className="descripcion-pagina">
                  En Mi Aremy ofrecemos los mejores productos para ti. Explora nuestro catálogo y conoce más sobre nosotros.
                </p>
              </>
            }
          />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
