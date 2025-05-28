import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import ProductList from "../components/ProductList";
import loading from "../assets/loading.gif";

const Home = ({
  cart,
  productos,
  cargando,
  agregarCarrito,
  borrarProducto,
}) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />

      <main>
        <div style={{ textAlign: "center" }}>
        <h1>Bienvenido!</h1>

 <p>
  {" "}
  Bienvenido al paraíso de los fanáticos de la aviación. Aquí encontrarás una
  selección exclusiva de modelos a escala, kits de armado, réplicas históricas 
  y accesorios inspirados en el mundo aeronáutico. Nos apasiona traerte lo mejor 
  del coleccionismo y el aeromodelismo, con productos originales y de alta calidad, 
  directamente desde fabricantes reconocidos a nivel mundial. Explora, descubre y 
  deja que tu pasión por la aviación despegue con cada compra. ¡Estamos aquí para 
  hacer que tu experiencia sea única! ✈️🔥
</p>


        {cargando ? (
          <img src={loading} alt="loading" />
        ) : (
          <ProductList agregarCarrito={agregarCarrito} productos={productos} />
        )}
        </div>
      </main>

      <Footer />
    </>
  );
};
export default Home;
