//import styles
import "../styles/sobremi.css";
//import images
import image from "../img/ImageSobreMi.png";
import whatsapp from "../img/whatsapp.png";

const SobreMi = () => {
  return (
    <>
      <article className="inicio">
        <section className="inicio-2">
          <img src={image} />
        </section>

        <section className="inicio-1">
          <h1>
            Profesional en constante aprendizaje con conocimientos en desarrollo
            web más específicamente en
          </h1>
          <h1>HTML, CSS, JavaScript y librerías como ReactJS.</h1>
          <h1>
            Habilidades de trabajo en equipo, liderazgo, comunicación asertiva,
            buenas relaciones personales, alta adaptación al cambio.
          </h1>
        </section>

        <a href="https://api.whatsapp.com/send?phone=573232014153&text=Hola%2C%20Vi%20tu%20CV%20y%20portafolio%20online...">
          <img className="whatsapp" src={whatsapp} />
        </a>
      </article>
    </>
  );
};

export default SobreMi;
