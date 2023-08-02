import { Balancer } from "react-wrap-balancer";
import "../../App.css";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Loader from "./Loader";

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



    const [windowsSize, setWindowsSize] = useState([window.innerWidth])

    useEffect(() => {
        const handleWindowsResize = () => {
            setWindowsSize([window.innerWidth]);
        };

        window.addEventListener('resize', handleWindowsResize);

        return () => {
            window.removeEventListener('resize', handleWindowsResize);
        };
    });

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

    const [isLoading, setIsLoading] = useState(true)

    useEffect(
        () => { setTimeout(() => { setIsLoading(false) }, 3000) }
    )

    return (
        <>
            <div className="imgFondo">
                <div className="navbar__Flex" id="Inicio">
                    {windowsSize > 700 ?

                        <div className={navBar ? 'navbar__titleFlex background_titleOscuro' : 'navbar__titleFlex background_title'}>
                            <a href="#"><div className={navBar ? 'navbar__title shadowText' : 'navbar__title'}>beauty port</div></a>
                            <div className="navbar__ul">
                                <ul className="navbar__ul--list ">
                                    <a href="#Inicio" ><li className="textoRosaClaro letterSpacing animacionActive"> Inicio</li></a>
                                    <a href="#SobreNosotros" ><li className="textoRosaClaro letterSpacing animacionActive"> Sobre Nosotros</li></a>
                                    <a href="#Servicios" ><li className="textoRosaClaro letterSpacing animacionActive"> Servicios</li></a>
                                    <a href="#Contacto" ><li className="textoRosaClaro letterSpacing animacionActive"> Contáctanos</li></a>
                                </ul>
                            </div>
                        </div>

                        :

                        <div className="navbar__titleFlexMovil">
                            <a href="#"><div className="navbar__title arregloTitleMovil">beauty port</div></a>
                            <div className="navegadorDropdown" ref={menuRef}>
                                <div onClick={() => { setOpen(!open) }} className={`menuDropdown ${open ? 'active' : ''}`} />
                                <ul className={`menuDropdownNavegador2 ${open ? 'active' : 'inactive'}`}>
                                    <a href="#Inicio" ><li className="textoRosaClaro letterSpacing animacionActive"> Inicio</li></a>
                                    <a href="#SobreNosotros" ><li className="textoRosaClaro letterSpacing animacionActive"> Sobre Nosotros</li></a>
                                    <a href="#Servicios" ><li className="textoRosaClaro letterSpacing animacionActive"> Servicios</li></a>
                                    <a href="#Contacto" ><li className="textoRosaClaro letterSpacing animacionActive"> Contáctanos</li></a>
                                    <li className="letterSpacing textoGrisOscuro">Idioma: <div className="textoGrisOscuro">ES</div> <div aria-disabled>EN</div> </li>
                                </ul>
                            </div>
                        </div>

                    }
                    <div className="navbar__arreglo"></div>

                    <div className="navbar__img-text-conainer">

                        <div className="textIntro">
                            {windowsSize > 700 ?
                                <>
                                    <div className="textIntro__title textoGrisOscuro "><Balancer className="fontOswald fontWeight500 letterSpacing"> Libera Todo Tu Potencial</Balancer></div>
                                    <p className="textIntro__p textoGrisMedio centrado"> <Balancer>Bienvenidos a <b>beautyport</b>: &#10; Donde la Belleza se Une con la Sostenibilidad. Descubre la Armonía entre el Estilo y el Medio Ambiente. </Balancer></p>
                                </>
                                :
                                <>
                                    <div className="textIntro__title textoRosaClaro "><Balancer className="fontOswald fontWeight500 letterSpacing"> Libera Todo Tu Potencial</Balancer></div>
                                    <p className="textIntro__p textoRosaClaro centrado"> <Balancer>Bienvenidos a beautyport: Donde la Belleza se Une con la Sostenibilidad.  Descubre la Armonía entre el Estilo y el Medio Ambiente". </Balancer></p>
                                </>
                            }
                        </div>

                    </div>

                </div>
                {isLoading ?
                    <div className="scs-floating-button-right scs-floating-button fondoRojo">
                        <span className="loader"/>
                    </div>
                    :
                    <Helmet>
                        <script data-origin="https://home.shortcutssoftware.com/beautyport" data-company-id="19760" data-widget="_m"
                            data-floating-button="True" data-floating-button-text="Reservar Turno" data-floating-button-color="#FF2424"
                            data-floating-button-text-color="#FFFFFF" data-side-widget-position="right" data-floating-button-position="right"
                            type="text/javascript" style="background-color:unset;"
                            src="https://bookingscontent.shortcutssoftware.com/ols-onlinebooking-ui/assets/ols-widget/dist/ols-widget.min.js">
                        </script>
                    </Helmet>
                }

            </div>
        </>
    )
}

export default Navbar
