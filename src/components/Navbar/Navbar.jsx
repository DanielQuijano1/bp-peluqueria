import { Balancer } from "react-wrap-balancer";
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
                                <a href="#Inicio" ><li className="textoRosaClaro letterSpacing animacionActive"> Inicio</li></a>
                                <a href="#SobreNosotros" ><li className="textoRosaClaro letterSpacing animacionActive"> Sobre Nosotros</li></a>
                                <a href="#Servicios" ><li className="textoRosaClaro letterSpacing animacionActive"> Servicios</li></a>
                                <a href="#Contacto" ><li className="textoRosaClaro letterSpacing animacionActive"> Contáctanos</li></a>
                            </ul>
                        </div>
                    </div>

                    <div className="navbar__arreglo"></div>

                    <div className="navbar__img-text-conainer">

                        <div className="textIntro">
                            <div className="textIntro__title textoGrisOscuro"><Balancer className="fontOswald fontWeight500 letterSpacing"> Libera Todo Tu Potencial</Balancer></div>
                            <p className="textIntro__p textoGrisMedio"> <Balancer> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi consectetur cum blanditiis cupiditate, nemo consequatur qui numquam iste ea culpa quae.</Balancer></p>
                            <a href="https://www.google.com/maps/reserve/v/default?m=ZuYZ98OLOGI&source=pa&gei=C0NiZKqrL7Cj1sQPkLuKyAc&sourceurl=https://www.google.com/search?q%3Dbeauty%2Bport%2Bpeluqueria%26oq%3Dbeauty%2Bport%2Bpeluqueria%26aqs%3Dchrome..69i57.5819j0j1%26sourceid%3Dchrome%26ie%3DUTF-8&hl=es-419" target="blank"><div className="button textoRosaClaro fondoRosaOscuro fontMontserrat">Reserva Tu Turno</div></a>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
