import { Balancer } from "react-wrap-balancer";
import "../../../App.css";
import Card from "./Card.jsx"
import Marcas from "./Marcas";

function Servicios() {
    return (
        <>
            <section className="main__flex--services espaciadoVH" >
                <h1 className="textIntro__title fontMontserrat textoCentrado textoGrisOscuro letterSpacing" id="Servicios"><Balancer className="fontOswald fontWeight400"> Nuestros Servicios</Balancer></h1>
                <div className="main__flexCards">
                    <Card title="Peinados" className="cardImage letterSpacing card1"/>
                    <Card title="Spa de Pies" className="cardImage letterSpacing card2"/>
                    <Card title="Manicura" className="cardImage letterSpacing card3"/>
                </div>
            </section>
            <section className="fondoGrisOscuro width100vw">
                <h2 className="marcasTexto fontMontserrat textoCentrado"><Balancer className="fontOswald letterSpacing">Trabajan con Nosotros</Balancer> </h2>
                <div className="flex__marcas">
                    <Marcas className="marcaImagen kerastase"/>
                    <Marcas className="marcaImagen loreal"/>
                    <Marcas className="marcaImagen inoa"/>
                    <Marcas className="marcaImagen opi"/>
                </div>
            </section>
        </>
    )
}

export default Servicios