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
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
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
            <section className="main__flex--services espaciadoVH" >
                <h1 className="textIntro__title fontMontserrat textoCentrado textoGrisOscuro letterSpacing" id="Servicios"><Balancer className="fontOswald fontWeight400"> Nuestros Servicios</Balancer></h1>

                <Carousel className='flexCarrusel' responsive={responsive} infinite={true} autoPlaySpeed={500}>
                    <Card title="Peinados" className="cardImage letterSpacing card1" />
                    <Card title="Spa de Pies" className="cardImage letterSpacing card2" />
                    <Card title="Manicura" className="cardImage letterSpacing card3" />
                    <Card title="Peinados" className="cardImage letterSpacing card1" />
                    <Card title="Spa de Pies" className="cardImage letterSpacing card2" />
                    <Card title="Manicura" className="cardImage letterSpacing card3" />
                </Carousel>;

            </section>
            <section className="fondoGrisOscuro width100vw">
                <h2 className="marcasTexto fontMontserrat textoCentrado"><Balancer className="fontOswald letterSpacing">Trabajan con Nosotros</Balancer> </h2>
                <div className="flex__marcas">
                    <Marcas className="marcaImagen kerastase" />
                    <Marcas className="marcaImagen loreal" />
                    <Marcas className="marcaImagen inoa" />
                    <Marcas className="marcaImagen opi" />
                </div>
            </section>
        </>
    )
}

export default Servicios