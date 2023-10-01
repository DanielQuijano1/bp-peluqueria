import Balancer from "react-wrap-balancer"
import "./../../App.css"

function About({ windowsSize }) {
    return (
        <>

            <div className="width100vw widthTitle imgFondoContact centrarGrid">
                <h1 className="textoGrisOscuro textoGrisClaro paddingTitle textoCentrado backgroundTitle bordersTop">Sobre Nosotros</h1>
            </div>

            <div className="displayFlex flexDirectionColumn gap5em">
                <div className="textoGrisOscuro width80vw displayFlex flexDirectionColumn gap5em">
                    <div className="foto heigth300px centrarGridCentro">
                        <div className="textoRosaClaro">foto pelu</div>
                    </div>
                    <div className="displayGrid centrarGridCentro">
                        <Balancer className="textoCentrado ">
                            Fundada con la visión de marcar una diferencia en la industria de la belleza, beautyport es el resultado de un sueño compartido por un equipo apasionado y comprometido con la responsabilidad medioambiental.
                            <br /> <br />
                            Nuestra dedicación hacia lo natural y ecológico se refleja en cada detalle de nuestras prácticas y servicios.
                            <br /> <br />
                            Al unir la elegancia con el respeto por la naturaleza, ofrecemos una experiencia de peluquería que cuida de tu estilo y del mundo.
                        </Balancer>
                    </div>
                </div>

                <section className="width80vw displayFlex flexDirectionRow textoGrisOscuro gap1em heigth300px">
                    <div className="centrarGridCentro width30p heigth100p foto textoRosaClaro"><div>foto</div></div>
                    <div className="displayFlex flexDirectionColumn textoCentrado width40p heigth100p">
                        <h1>Productos Sustentables</h1>
                        <strong><Balancer>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Balancer></strong>
                    </div>
                    <div className="centrarGridCentro width30p heigth100p foto textoRosaClaro">foto</div>
                </section>
                <div className="heigth5em"></div>
            </div>

        </>
    )
}

export default About