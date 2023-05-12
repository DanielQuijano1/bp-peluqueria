import "../../App.css"

function Main() {
    return (
        <>
            <div className="main__flex" id="SobreNosotros">
                <div className="main__flex--interior espaciadoVH" >
                    <div className="textIntro__title textoCentrado textoGrisOscuro">¿Quienes Somos?</div>
                    <p className="textoGrisClaro textoCentrado">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis nemo ab suscipit ratione minima deserunt maiores quas inventore repudiandae provident ex alias dicta harum, a amet fuga quae eligendi architecto.</p>
                </div>
            </div>

            <div className="main__flex--img1">
                <div className="main__img img1"></div>
                <div className="textoImg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui consequuntur quo nisi, natus recusandae autem molestias sunt unde. Quibusdam beatae officia sapiente vero quos! Numquam fugiat sit ullam unde?</div>
            </div>

        <br />

            <div className="main__flex--img1">
                <div className="textoImg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, a eos quis consequuntur vel dolorem repellat minus nulla asperiores sequi saepe unde qui quae ab. Atque mollitia consequatur vero error.</div>
                <div className="main__img img2"></div>
            </div>
        </>
    )
}

export default Main
