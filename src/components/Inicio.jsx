import React from "react";
//import styles
import "../styles/inicio.css";
//import images
import image from "../img/ImageInicio.png";
import whatsapp from "../img/whatsapp.png"

const Inicio = () => {
  return (
    <>
      <article className="inicio">
        <section className="inicio-1">
          <h1>Hola, mi nombre es Jesús Ocampo, soy</h1>
          <h1> desarrollador de software</h1>
          <button>
            <a href="./CV Jesus Ocampo Dev.pdf" download="CV Jesus Ocampo">
              Descargar CV
            </a>
          </button>
        </section>
        <section className="inicio-2">
          <img src={image} />

        </section>
        <a href="https://api.whatsapp.com/send?phone=573232014153&text=Hola%2C%20Vi%20tu%20CV%20y%20portafolio%20online...">
            <img className="whatsapp" src={whatsapp}/>
          </a>
      </article>
    </>
  );
};

export default Inicio;
