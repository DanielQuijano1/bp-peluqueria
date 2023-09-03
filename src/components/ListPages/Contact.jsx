import "./../../App.css"
import MapaGoogle from "../Map/Map"

function Contact({ windowsSize }) {
    return (
        <>
            <div className="width100vw widthTitle imgFondoContact centrarGrid ">
                <h1 className="textoGrisOscuro textoGrisClaro padding10 textoCentrado backgroundTitle borders">Cómo Encontrarnos</h1>
            </div>
            <div className="width100vw heigth100vh centrarGridCentro">
                <div className="displayFlex flexDirectionRow spaceAround gap1em">
                    <MapaGoogle />
                    <div className="textoRosaClaro box500px boxContact" >
                        <section className="padding1em ">
                            <h3>Dirección</h3>
                            <p>Petrona Eyle 495, CABA</p>

                            <h3>Teléfono</h3>
                            <p>+54 9 11 3443-1280</p>


                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact