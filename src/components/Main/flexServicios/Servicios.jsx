import "../../../App.css";
import Card from "./Card.jsx"

function Servicios() {
    return (
        <>
            <div className="main__flex--services espaciadoVH">
                <h1 className="textIntro__title textoCentrado textoGrisOscuro">Nuestros Servicios</h1>
                <div className="main__flexCards">
                    <Card title="Peinados"/>
                    <Card title="Spa de Pies"/>
                    <Card title="Alisado"/>
                </div>
            </div>
        </>
    )
}

export default Servicios