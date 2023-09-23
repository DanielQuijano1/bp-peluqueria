import "./../../App.css"
import Loader from "./../Navbar/Loader.jsx"

export default function CardEsqueleto(){
    return(

        <section className="cardServicio fondoGrisClaro positionRelative height100p ">
            <div className="displayFlex fondoGrisClaro flexDirectionColumn justifyContentEnd heigth100p">
                <Loader></Loader>
            </div>
        </section>

    )
}