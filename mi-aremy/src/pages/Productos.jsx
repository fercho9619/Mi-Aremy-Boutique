// src/pages/Productos.jsx
import { useEffect, useState } from "react";
import "./Productos.css";

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("/src/data/products.json")
        .then((res) => res.json())
        .then((data) => setProductos(data))
        .catch((err) => console.error("Error cargando productos:", err));
    }, []);

    return (
        <main className="productos-container">
        <h2>Productos Destacados</h2>
        <div className="productos-grid">
            {productos.map((producto) => (
            <div key={producto.id} className="producto-card">
                <img src={producto.image} alt={producto.title} />
                <h3>{producto.title}</h3>
                <p><strong>Tallas:</strong> {producto.sizes.join(", ")}</p>
                <button className="btn-agregar">Agregar al carrito</button>
            </div>
            ))}
        </div>
        </main>
    );
};

export default Productos;
