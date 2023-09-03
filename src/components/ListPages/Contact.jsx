import "./../../App.css"
import MapaGoogle from "../Map/Map"

function Contact() {
    return (
        <>
            <div className="width100vw widthTitle imgFondoContact centrarGrid ">
                <h1 className="textoGrisOscuro textoGrisClaro padding10 textoCentrado backgroundTitle borders">Cómo Encontrarnos</h1>
            </div>
            <div className="displayFlex flexDirectionRow width80vw spaceAround ">
                <MapaGoogle />
                <div className="textoRosaClaro box500px boxContact" >
                    <section className="padding1em">
                        <h3>Dirección</h3>
                        <p>Petrona Eyle</p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Contact