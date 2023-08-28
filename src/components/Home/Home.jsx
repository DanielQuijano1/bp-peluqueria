import Header from "../Header/Header.jsx"
import Main from "../Main/Main.jsx"
import Servicios from "../Main/flexServicios/Servicios.jsx"
import "../../App.css"

function Home({windowsSize}) {
    return (
        <>
            <Header />
            <Main windowsSize={windowsSize} />
            <Servicios />
        </>
    )
}

export default Home