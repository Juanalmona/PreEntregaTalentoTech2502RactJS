import React from "react";
import { Link } from "react-router-dom";
import imagen404 from "../assets/404.gif"; // Ajusta la ruta si es necesario

const NotFound = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>404 NotFOUND</h1>
            <img src={imagen404} alt="Página no encontrada" style={{ width: "300px" }} />
            <br />
            <br/>
            <p>Upss... te has aventurado a un espacio aéreo desconocido. 🛫</p>
            <p>
            No encontramos la página que buscas, pero no te preocupes, aún puedes explorar 
            nuestro hangar lleno de modelos de aviones, réplicas y kits de armado. 🚀
            </p>
            <p>
            Regresa a la pista principal y sigue descubriendo el mundo de la aviación con nosotros. ✈️
            </p>

            <button><Link to="/">Volver al Inicio</Link></button>
        </div>
    );
}

export default NotFound;
