import "../../App.css";

function Navbar() {
    return (
        <>
            <div className="navbar__Flex">

                <div className="navbar__titleFlex">
                    <div className="navbar__title textoGrisOscuro">beauty port</div>
                    <div className="navbar__ul">
                        <ul className="navbar__ul--list textoGrisOscuro">
                            <li>Inicio</li>
                            <li>Sobre Nosotros</li>
                            <li>Servicios</li>
                            <li>Contáctanos</li>
                        </ul>
                    </div>
                </div>

                <div className="navbar__img-text-conainer">

                    <div className="textIntro">
                        <div className="textIntro__title textoGrisOscuro">La Belleza de lo Natural</div>
                        <p className="textIntro__p textoGrisMedio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi consectetur cum blanditiis cupiditate, nemo consequatur qui numquam iste ea culpa quae.</p>
                        <div className="button textoRosaClaro fondoRosaOscuro ">Reserva Tu Turno</div>
                    </div>

                    <div className="imgText" />

                </div>

            </div>
        </>
    )
}

export default Navbar
