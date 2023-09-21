import Balancer from "react-wrap-balancer"
import "./../../App.css"

function About({windosSize}) {
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
                    <Balancer className="textoCentrado ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus labore, eveniet ipsum fugiat amet cupiditate consequatur illo eius nihil. Veniam, possimus earum impedit eius ipsum est accusamus voluptas vitae iste.
                        Hic nam, provident tempora aliquid assumenda necessitatibus perferendis sapiente suscipit unde reiciendis ipsam nihil odio eligendi, explicabo eaque qui! Ullam error beatae voluptatum delectus! Aut numquam temporibus alias? Quos, quas.
                    </Balancer>
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