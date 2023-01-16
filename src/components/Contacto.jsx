//Import Styles
import style from "../styles/contacto.css"
//Import Images
import location from "../img//Location.png"
import github from "../img//GitHub.png"
import call from "../img//Call.png"
import linkedin from "../img//Linkedin.png"
import email from "../img//Email.png"
import whatsapp from "../img//whatsapp.png"

const Contacto = () => {
  return (
    <>
    <div className='contact'>
      <div className='contact-section'>
        <img src={location}/>
        <h1>Bogota, Colombia</h1>
      </div>

      <div className='contact-section'>
        <img src={github}/>
        <h1>https://github.com/jesusocampo1105</h1>
      </div>

      <div className='contact-section'>
        <img src={call}/>
        <h1>+57 3232014153</h1>
      </div>

      <div className='contact-section'>
        <img src={linkedin}/>
        <h1>https://www.linkedin.com/in/jesus-ocampo/</h1>
      </div>

      <div className='contact-section'>
        <img src={email}/>
        <h1>jesusocampo1105@gmail.com</h1>
      </div>
      <a href="https://api.whatsapp.com/send?phone=573232014153&text=Hola%2C%20Vi%20tu%20CV%20y%20portafolio%20online...">
            <img className="whatsapp" src={whatsapp}/>
          </a>
    </div>
    </>
  )
}

export default Contacto