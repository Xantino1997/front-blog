import fb from './assets/facebook.png';
import wts from './assets/whatsapp.png';
import inst from './assets/instagram.png';
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-content">
                <div><h2 className="titulo-footer">Sentidos</h2></div>
                <div className="footer-social">
                    <h4 >Nuestras Redes</h4>
                    <a className="footer-whatsapp" href="https://www.whatsapp.com" target="_blank"><img className="footer-whatsapp " src={wts} alt="WhatsApp" /></a>
                    <a className="footer-instagram" href="https://www.instagram.com" target="_blank"><img className="footer-instagram" src={inst} alt="Instagram" /></a>
                    <a className="footer-facebook" href="https://www.facebook.com/SentidosAsociacion/" target="_blank"><img className="footer-facebook" src={fb} alt="Facebook" /></a>

                </div>
            </div> 
            <p className="copy">&copy; {year} <b>Sentidos</b></p>
        </footer>
    );
}

