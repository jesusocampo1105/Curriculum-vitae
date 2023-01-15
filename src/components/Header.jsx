//Import images
import Logo from '../img/Logo.png';
//Import Hooks
import { useState } from 'react';
//import styles
import '../styles/header.css';
//Import library
import { Outlet, Link } from 'react-router-dom';

const Header = () => {

    const [ menu , setMenu ] = useState( false )

    const toggleMenu = () => {
        setMenu( !menu )
    }

    return (
    <header className="Header">
         <section className='header-1'>
            <img src={Logo} alt="" />
            <p>Jesús Ocampo</p>
        </section>

        <button 
            onClick={ toggleMenu }
         className="Header-button">
        <svg className='Header-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </button>

        <nav className={ `Header-nav ${ menu ? 'isActive' : '' }` }>
            <ul className="Header-ul">
                <li className="Header-li"> <Link to="inicio">Inicio</Link> </li>
                <li className="Header-li"> <Link to="sobremi">Sobre mi</Link> </li>
                <li className="Header-li"> <Link to="portafolio">Portafolio</Link> </li>
                <li className="Header-li"> <Link to="contacto">Contacto</Link> </li>
            </ul>
        </nav>
        <Outlet/>
    </header>
)
}

export default Header