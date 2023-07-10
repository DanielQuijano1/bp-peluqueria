import { Balancer } from "react-wrap-balancer";
import "../../App.css";
import { useEffect, useRef, useState } from "react";

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
                                </ul>
                            </div>
                        </div>

                    }
                    <div className="navbar__arreglo"></div> 

                    <div className="navbar__img-text-conainer">

                        <div className="textIntro">
                            {windowsSize > 700 ?
                                <>
                                    <div className="textIntro__title textoGrisOscuro"><Balancer className="fontOswald fontWeight500 letterSpacing"> Libera Todo Tu Potencial</Balancer></div>
                                    <p className="textIntro__p textoGrisMedio"> <Balancer> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi consectetur cum blanditiis cupiditate, nemo consequatur qui numquam iste ea culpa quae.</Balancer></p>
                                </>
                                :
                                <>
                                    <div className="textIntro__title textoRosaClaro"><Balancer className="fontOswald fontWeight500 letterSpacing"> Libera Todo Tu Potencial</Balancer></div>
                                    <p className="textIntro__p textoRosaClaro"> <Balancer> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi consectetur cum blanditiis cupiditate, nemo consequatur qui numquam iste ea culpa quae.</Balancer></p>
                                </>
                            }
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
