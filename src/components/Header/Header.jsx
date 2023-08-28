import { Balancer } from "react-wrap-balancer";
import { Helmet } from "react-helmet";
import "../../App.css"

function Header(windowsSize) {
    return (

        <>

            <div className="imgFondo">
                <div className="navbar__Flex" id="Inicio">

                    <div className="navbar__arreglo"></div>

                    <div className="navbar__img-text-conainer">

                        <div className="textIntro">
                            {windowsSize > 800 ?
                                <>
                                    <div className="textIntro__title textoGrisOscuro "><Balancer className="fontOswald fontWeight500 letterSpacing"> Libera Todo Tu Potencial</Balancer></div>
                                    <p className="textIntro__p textoGrisMedio centrado">
                                        <Balancer>
                                            Donde la Belleza se Une con la Sustentabilidad. <br />
                                            Descubre la Armonía entre el Estilo y el Medio Ambiente.
                                        </Balancer>
                                    </p>
                                </>
                                :
                                <div className="textIntro__Box">
                                    <div className="textIntro__title textoGrisOscuro "><Balancer className="fontOswald fontWeight500"> Libera Todo Tu Potencial</Balancer></div>
                                    <p className="textIntro__p textoGrisOscuro centrado">
                                        <Balancer>
                                            Donde la Belleza se Une con la Sustentabilidad. <br />
                                            Descubre la Armonía entre el Estilo y el Medio Ambiente.
                                        </Balancer>
                                    </p>
                                </div>
                            }
                        </div>

                    </div>

                </div>
                <div className="scs-floating-button-right scs-floating-button fondoRojo">
                    <span className="loader" />
                </div>
                <Helmet>
                    <script data-origin="https://home.shortcutssoftware.com/beautyport" data-company-id="19760" data-widget="_m"
                        data-floating-button="True" data-floating-button-text="Reservar Turno" data-floating-button-color="#FF2424"
                        data-floating-button-text-color="#FFFFFF" data-side-widget-position="right" data-floating-button-position="right"
                        type="text/javascript" style="background-color:unset;"
                        src="https://bookingscontent.shortcutssoftware.com/ols-onlinebooking-ui/assets/ols-widget/dist/ols-widget.min.js">
                    </script>
                </Helmet>

            </div>
        </>
    )
}

export default Header;