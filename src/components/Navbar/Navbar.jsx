import { NavLink } from "react-router-dom";
import "../../App.css";
import { useEffect, useRef, useState } from "react";

function Navbar({ windowsSize }) {

    const [navBar, setNavBar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)



    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

    return (
        <>
            {windowsSize > 800 ?

                <div className={navBar ? 'navbar__titleFlex background_titleOscuro' : 'navbar__titleFlex background_title'}>
                    <NavLink to="/"><div className={navBar ? 'navbar__title shadowText' : 'navbar__title'}>beauty port</div></NavLink>
                    <div className="navbar__ul">
                        <ul className="navbar__ul--list ">
                            <NavLink to="/"><li className={navBar ? 'textoRosaClaro letterSpacing animacionActive':'textoGrisOscuro letterSpacing animacionActive'}> Inicio</li></NavLink>
                            <NavLink to="/about"><li className={navBar ? 'textoRosaClaro letterSpacing animacionActive':'textoGrisOscuro letterSpacing animacionActive'}> Sobre Nosotros</li></NavLink>
                            <NavLink to="/services"><li className={navBar ? 'textoRosaClaro letterSpacing animacionActive':'textoGrisOscuro letterSpacing animacionActive'}> Servicios</li></NavLink>
                            <NavLink to="/contact"><li className={navBar ? 'textoRosaClaro letterSpacing animacionActive':'textoGrisOscuro letterSpacing animacionActive'}> Contáctanos</li></NavLink>
                        </ul>
                    </div>
                </div>

                :

                <div className="navbar__titleFlexMovil">
                    <NavLink to="/"><div className="navbar__title arregloTitleMovil">beauty port</div></NavLink>
                    <div className="navegadorDropdown" ref={menuRef}>
                        <div onClick={() => { setOpen(!open) }} className={`menuDropdown ${open ? 'active' : ''}`} />
                        <ul className={`menuDropdownNavegador2 ${open ? 'active' : 'inactive'}`}>
                            <NavLink to="/"><li className="textoRosaClaro letterSpacing animacionActive"> Inicio</li></NavLink>
                            <NavLink to="/about"><li className="textoRosaClaro letterSpacing animacionActive"> Sobre Nosotros</li></NavLink>
                            <NavLink to="/services"><li className="textoRosaClaro letterSpacing animacionActive"> Servicios</li></NavLink>
                            <NavLink to="/contact"><li className="textoRosaClaro letterSpacing animacionActive"> Contáctanos</li></NavLink>
                            <li className="letterSpacing textoGrisOscuro">
                                Idioma:
                            </li>
                        </ul>
                    </div>
                </div>

            }
        </>
    )
}

export default Navbar
