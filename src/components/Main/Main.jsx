import "../../App.css"
import { Balancer } from "react-wrap-balancer"

function Main({ windowsSize }) {
    return (
        <>
            <div className="main__flex animacionScroll" id="SobreNosotros">
                <div className="main__flex--interior" >
                    <div className="textIntro__title textoCentrado textoGrisOscuro letterSpacing espaciadoVH"><Balancer className="fontOswald fontWeight400"> ¿Quienes Somos?</Balancer></div>
                    <p className="textoGrisClaro textoCentrado espaciadoVH"><Balancer className="widthYheigth100">Fundada con la visión de marcar una diferencia en la industria de la belleza, beautyport es el resultado de un sueño compartido por un equipo apasionado y comprometido con la responsabilidad medioambiental. <br /> <br />Nuestra dedicación hacia lo natural y ecológico se refleja en cada detalle de nuestras prácticas y servicios.<br /> <br /> Al unir la elegancia con el respeto por la naturaleza, ofrecemos una experiencia de peluquería que cuida de tu estilo y del mundo.</Balancer></p>
                </div>
            </div>

            {windowsSize > 800 ?
                <section className="main_section ">

                    <div className="textIntro__title textoCentrado textoGrisOscuro letterSpacing espaciadoVH"><Balancer className="fontOswald fontWeight400"> ¿Por Qué Elegirnos?</Balancer></div>
                    <div className="main_flexPhotos main_borders animacionScroll espaciadoVH">
                        <div className="main__img img1 "></div>
                        <div className="textoImg ">
                            <Balancer className="widthYheigth100">
                                <h1 className="titleTextImg">Experiencia en Sintonía con la Naturaleza: </h1>
                                Nuestro equipo de estilistas altamente capacitados combina su experiencia en el mundo del estilismo con un profundo respeto por el medio ambiente. <br />
                                <br />Cada servicio que ofrecemos está diseñado para realzar tu belleza sin comprometer la salud de tu cabello o del planeta.
                            </Balancer>
                        </div>
                    </div>



                    <div className="main_flexPhotos animacionScroll espaciadoVH">
                        <div className="textoImg ">
                            <Balancer className="widthYheigth100">
                                <h1> Productos Sustentables: </h1>
                                Utilizamos exclusivamente productos ecológicos, libres de químicos nocivos, que cuidan tanto de tu cabello como del medio ambiente. <br />
                                <br />Creemos que la belleza no debería dañar a la naturaleza, y por eso, nuestras prácticas son siempre respetuosas con el ecosistema.
                            </Balancer>
                        </div>
                        <div className="main__img img2 "></div>
                    </div>

                    <div className="main_flexPhotos main_borders animacionScroll espaciadoVH">
                        <div className="main__img img1 "></div>
                        <div className="textoImg ">
                            <Balancer className="widthYheigth100">
                                <h1>   Experiencia en Sintonía con la Naturaleza:</h1>
                                Nuestro equipo de estilistas altamente capacitados combina su experiencia en el mundo del estilismo con un profundo respeto por el medio ambiente. <br />
                                <br />Cada servicio que ofrecemos está diseñado para realzar tu belleza sin comprometer la salud de tu cabello o del planeta.
                            </Balancer>
                        </div>
                    </div>
                </section>
                :
                <section className="main_section ">

                    <div className="textIntro__title textoCentrado textoGrisOscuro letterSpacing espaciadoVH"><Balancer className="fontOswald fontWeight400"> ¿Por Qué Elegirnos?</Balancer></div>
                    <div className="main_flexPhotos main_borders animacionScroll espaciadoVH">
                        <div className="main__img img1 "></div>
                        <div className="textoImg ">
                            <Balancer className="widthYheigth100">
                                <h1 className="titleTextImg">Experiencia en Sintonía con la Naturaleza: </h1>
                                Nuestro equipo de estilistas altamente capacitados combina su experiencia en el mundo del estilismo con un profundo respeto por el medio ambiente. <br />
                                <br />Cada servicio que ofrecemos está diseñado para realzar tu belleza sin comprometer la salud de tu cabello o del planeta.
                            </Balancer>
                        </div>
                    </div>

                    <div className="main_flexPhotos animacionScroll espaciadoVH">
                        
                    <div className="main__img img2 "></div>
                        <div className="textoImg ">
                            <Balancer className="widthYheigth100">
                                <h1> Productos Sustentables: </h1>
                                Utilizamos exclusivamente productos ecológicos, libres de químicos nocivos, que cuidan tanto de tu cabello como del medio ambiente. <br />
                                <br />Creemos que la belleza no debería dañar a la naturaleza, y por eso, nuestras prácticas son siempre respetuosas con el ecosistema.
                            </Balancer>
                        </div>
                    </div>

                    <div className="main_flexPhotos animacionScroll espaciadoVH">
                        <div className="main__img img2 "></div>
                        <div className="textoImg ">
                            <Balancer className="widthYheigth100">
                                <h1> Productos Sustentables: </h1>
                                Utilizamos exclusivamente productos ecológicos, libres de químicos nocivos, que cuidan tanto de tu cabello como del medio ambiente. <br />
                                <br />Creemos que la belleza no debería dañar a la naturaleza, y por eso, nuestras prácticas son siempre respetuosas con el ecosistema.
                            </Balancer>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Main
