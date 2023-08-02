import "../../App.css"
import { Balancer } from "react-wrap-balancer"

function Main() {
    return (
        <>
            <div className="main__flex" id="SobreNosotros">
                <div className="main__flex--interior espaciadoVH" >
                    <div className="textIntro__title textoCentrado textoGrisOscuro letterSpacing"><Balancer className="fontOswald fontWeight400"> ¿Quienes Somos?</Balancer></div>
                    <p className="textoGrisClaro textoCentrado"><Balancer className="widthYheigth100">Fundada con la visión de marcar una diferencia en la industria de la belleza, beautyport es el resultado de un sueño compartido por un equipo apasionado y comprometido con la responsabilidad medioambiental. Nuestra dedicación hacia lo natural y ecológico se refleja en cada detalle de nuestras prácticas y servicios. Al unir la elegancia con el respeto por la naturaleza, ofrecemos una experiencia de peluquería que cuida de tu estilo y del mundo.</Balancer></p>
                </div>
            </div>

            <section className="main_section">
                <div className="main_flexPhotos main_borders">
                    <div className="main__img img1"></div>
                    <div className="textoImg"><Balancer className="widthYheigth100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui consequuntur quo nisi, natus recusandae autem molestias sunt unde. Quibusdam beatae officia sapiente vero quos! Numquam fugiat sit ullam unde?</Balancer></div>
                </div>
                <div className="main_flexPhotos">
                    <div className="textoImg"><Balancer className="widthYheigth100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, a eos quis consequuntur vel dolorem repellat minus nulla asperiores sequi saepe unde qui quae ab. Atque mollitia consequatur vero error.</Balancer></div>
                    <div className="main__img img2"></div>
                </div>
            </section>

            
        </>
    )
}

export default Main
