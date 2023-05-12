import "../../../App.css";
import Card from "./Card.jsx"

function Servicios() {
    return (
        <>
            <div className="main__flex--services espaciadoVH" >
                <h1 className="textIntro__title textoCentrado textoGrisOscuro" id="Servicios">Nuestros Servicios</h1>
                <div className="main__flexCards">
                    <Card title="Peinados" className="cardImage card1"/>
                    <Card title="Spa de Pies" className="cardImage card2"/>
                    <Card title="Manicura" className="cardImage card3"/>
                </div>
            </div>
        </>
    )
}

export default Servicios