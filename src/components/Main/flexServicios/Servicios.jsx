import { Balancer } from "react-wrap-balancer";
import "../../../App.css";
import Card from "./Card.jsx";
import Marcas from "./Marcas";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
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

function Servicios() {
    return (
        <>
            
            <section className="fondoNegro width100vw">
                <h2 className="marcasTexto fontMontserrat textoCentrado"><Balancer className="fontOswald letterSpacing">Trabajan con Nosotros</Balancer> </h2>
                <Carousel className="flex__marcas" responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
                    <Marcas className="marcaImagen kerastase" />
                    <Marcas className="marcaImagen loreal" />
                    <Marcas className="marcaImagen inoa" />
                    <Marcas className="marcaImagen opi" />
                </Carousel>
            </section>
        </>
    )
}

export default Servicios