import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import ProductList from "../components/ProductList";
import loading from '../assets/loading.gif'
const GaleriaDeProductos = ({ cart ,productos, cargando, agregarCarrito, borrarProducto}) =>{
    return(
        <>
          <Header borrarProducto={borrarProducto} cartItems={cart}/>
            <h1 style={{ textAlign: "center" }} >Galeria de producto</h1>
            { 
              cargando ? <img src={loading} alt="loading" style={{ display: "block", margin: "0 auto" }} />:
              <ProductList agregarCarrito={agregarCarrito} productos={productos} />
            }
          <Footer/>
        </>
    )
}

export default GaleriaDeProductos