import "./../../App.css"
import Card from "../Card/Card";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerServicioPorCategoria, obtenerServicios } from "../../services";
import CardEsqueleto from "../Card/CardEsqueleto";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


function Services() {


    const [servicios, setServicios] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [textoAlerta, setTextoAlerta] = useState()

    let categoryid = useParams().categoryid;

    useEffect(() => {
        if (!categoryid) {
            obtenerServicios()
                .then((respuesta) => {
                    setServicios(respuesta)
                    setIsLoading(false)
                    setTextoAlerta("Items cargados correctamente")
                })
                .catch((error) => {
                    setTextoAlerta(error)
                })
                .finally(() => setIsLoading(false))
        }
        else {
            obtenerServicioPorCategoria(categoryid).then((respuesta) => {
                setServicios(respuesta)
                setIsLoading(False)
            })
                .finally(() => setIsLoading(false))
        }
    }, [categoryid]);

    return (
        <>
            <div className="width100vw widthTitle imgFondoContact centrarGrid">
                <h1 className="textoGrisClaro paddingTitle textoCentrado backgroundTitle bordersTop">Nuestros Servicios</h1>
            </div>
            <div className="displayFlex flexDirectionColumn gap3em">
                <section className="textoCentrado textoGrisOscuro">
                    {isLoading ?
                        <Carousel className="width80vw flexServicios" responsive={responsive} infinite={true} autoPlay={true} centerMode={true} showDots={true} autoPlaySpeed={5000}>
                            <CardEsqueleto />
                            <CardEsqueleto />
                            <CardEsqueleto />
                            <CardEsqueleto />
                            <CardEsqueleto />
                            <CardEsqueleto />
                            <CardEsqueleto />
                        </Carousel>
                        :
                        <Carousel className="width80vw flexServicios" responsive={responsive} infinite={true} autoPlay={true} centerMode={true} showDots={true} autoPlaySpeed={5000}>
                            {servicios.map((item) => <Card key={item.id} item={item} />)}
                        </Carousel>
                    }
                </section>

                <section className="textoCentrado textoGrisOscuro displayFlex flexDirectionColumn width80vw">
                    <h1>Spa de Pies</h1>
                    <div className="displayFlex flexDirectionRow gap1em width80vw spaceAround ">
                        <div className="centrarGridCentro foto textoRosaClaro width40p">foto</div>
                        <div className="width40p">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium earum quibusdam, labore quas rem possimus voluptate necessitatibus magnam perspiciatis, dolor nam harum delectus adipisci molestias quisquam in laudantium vero aliquid!</p>
                            <button className="animacionActive animacionHover"> + VER MAS</button>
                        </div>
                    </div>
                </section>

                <section className="textoCentrado textoGrisOscuro displayFlex flexDirectionColumn width80vw">
                    <h1>Spa de Manos</h1>
                    <div className="displayFlex flexDirectionRow gap1em width80vw spaceAround">
                        <div className="width40p">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium earum quibusdam, labore quas rem possimus voluptate necessitatibus magnam perspiciatis, dolor nam harum delectus adipisci molestias quisquam in laudantium vero aliquid!</p>
                            <button className="animacionActive animacionHover"> + VER MAS</button>
                        </div>
                        <div className="centrarGridCentro foto textoRosaClaro width40p">foto</div>
                    </div>
                </section>

                <div></div>
            </div>
        </>
    )
}

export default Services