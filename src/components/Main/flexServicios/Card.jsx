import "../../../App.css"

function Card(props) {
    return (
        <section className="main__card">
            <img src={props.url} alt="" className="" />
            <h3 className="textoGrisOscuro">{props.title}</h3>
            <p className="textoGrisClaro">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat maxime reiciendis doloribus quo.</p>
            <p className="animacionHover animacionActive textoRosaOscuro">conocer mas</p>
        </section>
    )
}

export default Card 