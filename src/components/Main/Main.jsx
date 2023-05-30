import "../../App.css"
import { Balancer } from "react-wrap-balancer"

function Main() {
    return (
        <>
            <div className="main__flex" id="SobreNosotros">
                <div className="main__flex--interior espaciadoVH" >
                    <div className="textIntro__title textoCentrado textoGrisOscuro letterSpacing"><Balancer className="fontOswald fontWeight400"> ¿Quienes Somos?</Balancer></div>
                    <p className="textoGrisClaro textoCentrado"><Balancer className="widthYheigth100">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis nemo ab suscipit ratione minima deserunt maiores quas inventore repudiandae provident ex alias dicta harum, a amet fuga quae eligendi architecto.</Balancer></p>
                </div>
            </div>

            <div className="main__flex--img1">
                <div className="main__img img1"></div>
                <div className="textoImg"><Balancer className="widthYheigth100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui consequuntur quo nisi, natus recusandae autem molestias sunt unde. Quibusdam beatae officia sapiente vero quos! Numquam fugiat sit ullam unde?</Balancer></div>
            </div>

            <br />

            <div className="main__flex--img1">
                <div className="textoImg"><Balancer className="widthYheigth100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, a eos quis consequuntur vel dolorem repellat minus nulla asperiores sequi saepe unde qui quae ab. Atque mollitia consequatur vero error.</Balancer></div>
                <div className="main__img img2"></div>
            </div>

            

        </>
    )
}

export default Main
