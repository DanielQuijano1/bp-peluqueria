import "./../../App.css"
import MapaGoogle from "../Map/Map"

function Contact({ windowsSize }) {
    return (
        <>
            <div className="width100vw widthTitle imgFondoContact centrarGrid ">
                <h1 className="textoGrisOscuro textoGrisClaro padding10 textoCentrado backgroundTitle bordersTop">Cómo Encontrarnos</h1>
            </div>
            <div className="width100vw centrarGridCentro">
                <div className="displayFlex flexDirectionColumn spaceAround gap1em">
                    <MapaGoogle />
                    <div className="noPaddingTop"/>
                    <div className="textoGrisOscuro textoCentrado" >
                        <section className="padding1em ">
                            <h3>Puerto Madero</h3>
                            <p>Petrona Eyle 495, CABA</p>
                            <p>+54 11 3443-1280</p>
                            <p>Lunes a Sábados 10hs a 20hs</p>
                        </section>
                    </div>
                    <div className="noPaddingTop"/>
                    <div className="padding1em"/>   
                </div>
            </div>
        </>
    )
}

export default Contact