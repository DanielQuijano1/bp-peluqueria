import "../../App.css"
import { Balancer } from "react-wrap-balancer"

function Main({ windowsSize }) {
    return (
        <>
            

            {windowsSize > 800 ?
                <section className="main_section ">

                    <div className="main_flexPhotos main_borders espaciadoVH">
                        <div className="main__img img1 "></div>
                        <div className="textoImg ">
                            <div className="noPaddingTop" />
                            <div className="widthYheigth100 fontSize18px">
                                <h1 className="titleTextImg ">Experiencia en Sintonía con la Naturaleza </h1>
                                <br />Cada servicio que ofrecemos está diseñado para realzar tu belleza sin comprometer la salud de tu cabello o del planeta.
                            </div>
                            <div className="paddingTop noPaddingTop" />
                        </div>
                    </div>

                    <div className="main_flexPhotos ">
                        <div className="textoImg ">
                            <div className="noPaddingTop" />
                            <Balancer className="widthYheigth100 fontSize18px">
                                <h1 className="titleTextImg"> Productos Sustentables </h1>
                                Utilizamos exclusivamente productos ecológicos, libres de químicos nocivos, que cuidan tanto de tu cabello como del medio ambiente. <br />
                            </Balancer>
                            <div className="paddingTop noPaddingTop" />
                        </div>
                        <div className="main__img img2 "></div>
                    </div>

                    <div className="main_flexPhotos main_borders  espaciadoVH">
                        <div className="main__img img3 "></div>
                        <div className="textoImg ">
                            <div className="noPaddingTop" />
                            <Balancer className="widthYheigth100 fontSize18px">
                                <h1 className="titleTextImg"> Atención Personalizada </h1>
                                Cada cliente es único, y así lo tratamos. <br />
                                <br />Nuestro enfoque personalizado nos permite entender tus necesidades y deseos para ofrecerte un servicio que supere tus expectativas y te haga sentir radiante.
                            </Balancer>
                            <div className="paddingTop noPaddingTop" />
                        </div>
                    </div>


                </section>
                :
                <section className="main_section ">

                    <div className="main_flexPhotos main_borders  espaciadoVH">
                        <div className="main__img img1 borderIMG1" />
                        <div className="textoImg ">
                            <Balancer className="widthYheigth100 fontSize18px">
                                <h1 className="titleTextImg">Experiencia en Sintonía con la Naturaleza </h1>
                                Nuestro equipo de estilistas altamente capacitados combina su experiencia en el mundo del estilismo con un profundo respeto por el medio ambiente. <br />
                                <br />Cada servicio que ofrecemos está diseñado para realzar tu belleza sin comprometer la salud de tu cabello o del planeta.
                            </Balancer>
                            <div className="paddingTop noPaddingTop" />

                        </div>
                    </div>

                    <div className="main_flexPhotos  ">
                        <div className="main__img img2 borderIMG1" />
                        <div className="textoImg ">
                            <Balancer className="widthYheigth100 fontSize18px">
                                <h1 className="titleTextImg"> Productos Sustentables </h1>
                                Utilizamos exclusivamente productos ecológicos, libres de químicos nocivos, que cuidan tanto de tu cabello como del medio ambiente. <br />
                                <br />Creemos que la belleza no debería dañar a la naturaleza, y por eso, nuestras prácticas son siempre respetuosas con el ecosistema.
                            </Balancer>
                            <div className="paddingTop noPaddingTop" />

                        </div>
                    </div>

                    <div className="main_flexPhotos  espaciadoVH">
                        <div className="main__img img3 borderIMG1" />
                        <div className="textoImg ">
                            <Balancer className="widthYheigth100 fontSize18px">
                                <h1 className="titleTextImg"> Atención Personalizada </h1>
                                Cada cliente es único, y así lo tratamos. <br />
                                <br />Nuestro enfoque personalizado nos permite entender tus necesidades y deseos para ofrecerte un servicio que supere tus expectativas y te haga sentir radiante.
                            </Balancer>
                            <div className="paddingTop noPaddingTop" />

                        </div>
                    </div>
                </section>
            }

        </>
    )
}

export default Main
