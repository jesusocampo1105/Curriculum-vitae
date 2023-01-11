import React from "react";
//import styles
import '../styles/inicio.css'
//import images
import image from '../img/ImageInicio.png'

const Inicio = () => {
  return (
    <>
      <article className="inicio">
        <section className="inicio-1">
            <h1>Hola, mi nombre es
            Jesús Ocampo,
            soy</h1>
            <h1> desarrollador de software</h1>
            <button><a href="./CV Jesus Ocampo Dev.pdf" download="CV Jesus Ocampo">Descargar CV</a></button>
        </section>
        <section className="inicio-2">
          <img src={image} />
        </section>
      </article>
    </>
  );
};

export default Inicio;
