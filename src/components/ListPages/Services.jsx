import "./../../App.css"
import Marcas from "./../Main/flexServicios/Marcas";
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
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};


function Services() {
    return (
        <>
            <div className="width100vw widthTitle imgFondoContact centrarGrid">
                <h1 className="textoGrisClaro paddingTitle textoCentrado backgroundTitle bordersTop">Nuestros Servicios</h1>
            </div>
            <section className="textoCentrado textoGrisOscuro">
                <h1>Peluquería</h1>
                <Carousel className="width80vw flexServicios" responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
                    <Marcas className=" cardServicio " />
                    <Marcas className=" cardServicio " />
                    <Marcas className=" cardServicio " />
                    <Marcas className=" cardServicio " />
                    <Marcas className=" cardServicio " />
                </Carousel>
            </section>
            <section className="textoCentrado textoGrisOscuro">
                <h1>Spa de Pies</h1>
            </section>
            <section className="textoCentrado textoGrisOscuro">
                <h1>Spa de Manos</h1>
            </section>
        </>
    )
}

export default Services