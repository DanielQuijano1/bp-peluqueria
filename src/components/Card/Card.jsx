import "./../../App.css"

export default function Card(props) {

    const { img, nombre, detalle } = props.item

    return (
        <section className="cardServicio  positionRelative height100p ">
            <div className="displayFlex flexDirectionColumn justifyContentEnd heigth100p">
                <div className="positionAbsolute positionImgCard displayGrid width100p">
                    <img className="imgCard " src={img} ></img>
                </div>
                <span className=""> {nombre} </span>
                <p className="">{detalle}</p>
            </div>
        </section>
    )
}

