import { NavLink } from "react-router-dom"
import "../../App.css"

function Footer() {
    return (
        <>
            <div className="footer__box footer__marcaDeAgua width100vw textoGrisOscuro" id="Contacto">
                <section className="footer_boxContent">
                    <NavLink to="/"> <div className="navbar__title">beauty port</div></NavLink>
                </section>

                <section className="footer_boxContent">
                    <h4 className="textoCentrado espaciadoRedesTop letterSpacing ">CONTÁCTANOS</h4>
                    <p className="letterSpacing textoGrisOscuro">Tel.: +54 9 11 3443-1280</p>
                    <a href="https://www.google.com/maps/place/Beauty+Port/@-34.6149662,-58.3613651,15z/data=!4m6!3m5!1s0x95a334d76e434389:0x33ebeb52c4a2a86a!8m2!3d-34.6149662!4d-58.3613651!16s%2Fg%2F1q62gd4hl" target="blank" className="textoGrisOscuro  letterSpacing"> Petrona Eyle 495, C1107CJC CABA</a>
                </section>

                <section className="footer_boxContent">
                    <h4 className="textoCentrado espaciadoRedesTop letterSpacing ">HORARIOS</h4>
                    <p className="letterSpacing textoGrisOscuro">Lunes a Sábados: <br/> 10:00 a 20:00</p>
                </section>

                <section className="footer_boxContent ">
                    <h4 className="textoCentrado espaciadoRedesTop letterSpacing ">SÍGUENOS</h4>
                    <p className="textoCentrado letterSpacing">nuestras redes sociales</p>
                    <div className="footer__box--redes">
                        <a href="https://wa.me/+5491134431280" target="blank"><div className="popup__icon whatsapp__black animacionActive filter__opacity" /></a>
                        <a href="https://www.instagram.com/beautyportpeluqueria/?hl=es" target="blank"><div className="popup__icon instagram__black animacionActive filter__opacity" /></a>
                        <a href="https://www.facebook.com/beautyportoficial/?locale=es_LA" target="blank"><div className="popup__icon facebook__black animacionActive filter__opacity" /></a>
                    </div>
                </section>
            </div>
            <div className="heigth3em"></div>
            <div className="footer__marcaDeAgua width80vw textoMarcaDeAgua textoCentrado letterSpacing fontMontserrat">
                &#169; beautyport 2023. Todos los derechos reservados.
            </div>
        </>
    )
}

export default Footer
