import "../../App.css"
import Servicios from "./flexServicios/Servicios"

function Main() {
    return (
        <>
            <div className="main__flex">

                <div className="main__flex--interior espaciadoVH">
                    <div className="textIntro__title textoCentrado textoGrisOscuro">¿Quienes Somos?</div>
                    <p className="textoGrisClaro textoCentrado">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis nemo ab suscipit ratione minima deserunt maiores quas inventore repudiandae provident ex alias dicta harum, a amet fuga quae eligendi architecto.</p>
                </div>

                <Servicios />

            </div>
        </>
    )
}

export default Main
