import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";

const AcercaDe = ({ cart, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
 <div style={{ textAlign: "center" }}>
  <h1>Acerca de..</h1>
  <h2>Sobre Nosotros</h2>
  <p>
    Desde 2012, nuestra tienda se ha dedicado a traer lo mejor en aviones de juguete
    para apasionados de la aviación en Argentina. <br/>Fundada por un equipo de 
    entusiastas del mundo aeronáutico, nos especializamos en ofrecer modelos 
    auténticos y exclusivos, desde réplicas detalladas hasta diseños clásicos y modernos. 
    <br/>Gracias a nuestra alianza con fabricantes internacionales, contamos con acceso 
    a ediciones únicas, modelos coleccionables, <br/>kits de armado y una gran variedad 
    de artículos oficiales que difícilmente llegan al país por otros medios.
  </p>

  <h2>¿Cómo Trabajamos?</h2>
  <p>
    Para garantizar que nuestros clientes reciban productos originales y de calidad, 
    <br/>gestionamos importaciones directas desde fabricantes reconocidos a nivel mundial. 
    <br/>Trabajamos con distribuidores oficiales y proveedores confiables, asegurando que 
    cada avión sea genuino y con detalles precisos.<br/>
    Nuestro sistema logístico optimiza cada proceso para que los modelos lleguen lo más rápido posible, 
    <br/>minimizando costos y tiempos de espera. Nos especializamos en encontrar ediciones especiales 
    y en traer mercancía exclusiva, <br/>incluyendo aviones históricos, modernos, y de edición limitada.
  </p>

  <h2>Manejo de Pedidos</h2>
  <p>
    ✈️ Compra Online → Nuestro sitio web ofrece un catálogo actualizado con imágenes detalladas 
    y especificaciones de cada modelo. <br/>🌍 Gestión de Importación → Si el producto no está en stock, 
    <br/>lo pedimos directamente desde fabricantes internacionales para garantizar su autenticidad. 
    <br/>📦 Empaque y Envío → Cada pedido se embala con cuidado y se envía con seguimiento 
    para asegurar que llegue en perfectas condiciones. <br/>📢 Soporte al Cliente → Nuestro equipo está 
    siempre disponible para resolver dudas y ofrecer asesoramiento personalizado.<br/> 
    Nuestra misión es que cada amante de la aviación en Argentina pueda acceder a los mejores modelos sin 
    preocuparse por trámites de importación,<br/> tiempos de entrega o falsificaciones.<br/> 
    Queremos que cada compra sea una experiencia especial, porque sabemos que cada detalle importa. ✈️✨
  </p>
</div>

      <Footer />
    </>
  );
};

export default AcercaDe;
