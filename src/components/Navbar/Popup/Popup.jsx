import "./../../../App.css"

function Popup() {
    return (
        <div className="popup__box">
            <a href="tel:01134431280" target="blank"><div className="popup__icon tel animacionActive "/></a>
            <a href="https://wa.me/+5491134431280" target="blank"><div className="popup__icon whatsapp animacionActive "/></a>
            <a href="https://www.instagram.com/beautyportpeluqueria/?hl=es" target="blank"><div className="popup__icon instagram animacionActive "/></a>
            <a href="https://www.facebook.com/beautyportoficial/?locale=es_LA" target="blank"><div className="popup__icon facebook animacionActive "/></a>
        </div>
    )
}

export default Popup;