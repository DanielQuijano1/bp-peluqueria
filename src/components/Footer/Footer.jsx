import "../../App.css"

function Footer() {
    return (
        <>
            <div className="footer__box footer__marcaDeAgua width100vw textoGrisOscuro fontMontserrat" id="Contacto">
                <section className="footer_boxContent">
                    <a className="navbar__title arreglosTitle" href="#Inicio">beauty port</a>
                </section>
                <section className="footer_boxContent">
                    <h4 className="letterSpacing textUnderline">CONTÁCTANOS</h4>
                    <p>Tel.: +54 9 11 3443-1280</p>
                    <a href="https://www.google.com/maps/place/Beauty+Port/@-34.6149662,-58.3613651,15z/data=!4m6!3m5!1s0x95a334d76e434389:0x33ebeb52c4a2a86a!8m2!3d-34.6149662!4d-58.3613651!16s%2Fg%2F1q62gd4hl" target="blank" className="textoGrisOscuro  letterSpacing"> Petrona Eyle 495, C1107CJC CABA</a>
                    <p className="letterSpacing"> Horarios: 10:00 a 20:00</p>
                </section>
                <section className="footer_boxContent ">
                    <h4 className="textoCentrado espaciadoRedesTop letterSpacing textUnderline">SÍGUENOS</h4>
                    <p className="textoCentrado espaciadoRedes letterSpacing">nuestras redes sociales</p>
                    <div className="footer__box--redes">
                        <a href="" target="blank"><div className="popup__icon whatsapp__black animacionActive filter__opacity" /></a>
                        <a href="https://www.instagram.com/beautyportpeluqueria/?hl=es" target="blank"><div className="popup__icon instagram__black animacionActive filter__opacity" /></a>
                        <a href="https://www.facebook.com/beautyportoficial/?locale=es_LA" target="blank"><div className="popup__icon facebook__black animacionActive filter__opacity" /></a>
                    </div>
                </section>
            </div>
            <div className="footer__marcaDeAgua width80vw textoMarcaDeAgua textoCentrado letterSpacing fontMontserrat">
                &#169; beautyport 2023. Todos los derechos reservados.
            </div>
        </>
    )
}

export default Footer
