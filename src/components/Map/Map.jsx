export default function MapaGoogle(props){
    const{
        iframeSource = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6567.14182092789!2d-58.36599995717773!3d-34.61501034850567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d76e434389%3A0x33ebeb52c4a2a86a!2sBeauty%20Port!5e0!3m2!1ses-419!2sar!4v1693329657957!5m2!1ses-419!2sar" width="400" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    } = props;
    return <div className="mapaGoogle" dangerouslySetInnerHTML={{__html: iframeSource}}></div>
}