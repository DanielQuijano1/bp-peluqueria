import "./../../App.css"
import Card from "../Card/Card";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerServicioPorCategoria, obtenerServicios } from "../../services";
import CardEsqueleto from "../Card/CardEsqueleto";
import Balancer from "react-wrap-balancer";


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



function Services({ windowsSize }) {


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
                        windowsSize > 700 ?

                        <Carousel className="marginLeft10p width80vw flexServicios" responsive={responsive} infinite={true} autoPlay={true} centerMode={true} showDots={true} autoPlaySpeed={5000}>
                            {servicios.map((item) => <Card key={item.id} item={item} />)}
                        </Carousel>
                        :
                        <Carousel className="marginLeft10p width80vw flexServicios " responsive={responsive} infinite={true} autoPlay={true} centerMode={false} showDots={true} autoPlaySpeed={5000}>
                            {servicios.map((item) => <Card key={item.id} item={item} />)}
                        </Carousel>
                    }
                </section>

                <section className="textoCentrado textoGrisOscuro displayFlex flexDirectionColumn width8100vw">
                    <h1>Spa de Pies</h1>
                    <div className="displayFlex flexDirectionRow gap1em width100vw spaceAround ">
                        <div className="displayGrid centrarGridCentro">
                            {windowsSize < 700 ? <div className="main__img img4 borderIMG1" /> : <div className="main__img img4" />}
                        </div>
                        <div className="width40p">
                            <Balancer>
                                <h2>Sumérgete en un oasis de relajación con nuestro exclusivo Spa de Pies</h2>
                                <p>Nuestros <b> tratamientos terapéuticos y rejuvenecedores </b> son la receta perfecta para aliviar la fatiga y revitalizar tus pies.</p>
                                <p>Experimenta la <b> serenidad </b> mientras nuestros expertos cuidan de tu bienestar, elevando tu <b> comodidad </b> a un nivel inigualable.</p>

                            </Balancer>
                            <button className="animacionActive animacionHover"> + VER MAS</button>
                        </div>
                    </div>
                </section>

                <section className="textoCentrado textoGrisOscuro displayFlex flexDirectionColumn width80vw">
                    <h1>Spa de Manos</h1>
                    <div className="displayFlex flexDirectionRow gap1em width80vw spaceAround">
                        {windowsSize < 700 ?
                            <div className="displayGrid centrarGridCentro">
                                <div className="main__img img5 borderIMG1" />
                            </div>
                            :
                            <></>}
                        <div className="width40p">
                            <h2>Adéntrate en el mundo del lujo con nuestro Spa de Manos </h2>
                            <p> Nuestros tratamientos expertos transformarán tus manos, dejándolas <b> suaves, radiantes y rejuvenecidas </b></p>
                            <p> Desde manicuras clásicas hasta terapias de <b> hidratación profunda</b>, cada detalle se cuida con mimo para resaltar tu belleza natural </p>
                            <p> Sumérgete en la indulgencia y cuidado personal </p>

                            <button className="animacionActive animacionHover"> + VER MAS</button>
                        </div>
                        {windowsSize > 700 ?
                            <div className="displayGrid centrarGridCentro">
                                <div className="main__img img5 borderIMG1" />
                            </div>
                            : <></>}
                    </div>
                </section>

                <div></div>
            </div>
        </>
    )
}

export default Services