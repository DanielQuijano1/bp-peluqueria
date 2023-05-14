import "../../App.css";
import { useState } from "react";

function Navbar() {

    const [navBar, setNavBar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <>
            <div className="imgFondo">
                <div className="navbar__Flex" id="Inicio">

                    <div className={navBar ? 'navbar__titleFlex background_titleOscuro' : 'navbar__titleFlex background_title'}>
                        <a href="/"><div className={navBar ? 'navbar__title shadowText' : 'navbar__title'}>beauty port</div></a>
                        <div className="navbar__ul">
                            <ul className="navbar__ul--list ">
                                <a href="#Inicio" className="textoRosaClaro"><li> Inicio</li></a>
                                <a href="#SobreNosotros" className="textoRosaClaro"><li> Sobre Nosotros</li></a>
                                <a href="#Servicios" className="textoRosaClaro"><li> Servicios</li></a>
                                <a href="#Contacto" className="textoRosaClaro"><li> Contáctanos</li></a>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="navbar__arreglo"></div>

                    <div className="navbar__img-text-conainer">

                        <div className="textIntro">
                            <div className="textIntro__title textoGrisOscuro">La Belleza de lo Natural</div>
                            <p className="textIntro__p textoGrisMedio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi consectetur cum blanditiis cupiditate, nemo consequatur qui numquam iste ea culpa quae.</p>
                            <div className="button textoRosaClaro fondoRosaOscuro ">Reserva Tu Turno</div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
