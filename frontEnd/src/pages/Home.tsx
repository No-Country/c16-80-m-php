import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import About from '../assets/about.png';
import '../css/home.css'
import Adopt from "../components/adopt";


function Home({}) {
  return (
    <>
      <h1 className="hidden">Adopta Patitas</h1>
      <section id="home" className="home">
        <h2>Descubre a tu fiel compañero peludo</h2>
        <p>Nuestra comunidad esta dedicada a rescatar y encontrar hogares amoroso para perros y gatos</p>
      </section>
      <Adopt />
      <section id="about" className="about">
        <div className="container-page">
          <div className="description">
            <h2>Adopta Huellitas</h2>
            <p>Somos una comunidad dedicada a una noble misión: rescatar, cuidar y encontrar hogares amorosos para perros y gatos que han sido abandonados. Más que un simple refugio, buscamos ser un faro de esperanza para cada uno de nuestros rescatados, ofreciéndoles seguridad y consuelo en momentos de desamparo. Nuestra labor va más allá de proporcionar un techo; nos esforzamos por construir puentes entre la adversidad y el afecto duradero. Cada adopción es una celebración, un renacer de la esperanza y el comienzo de un nuevo capítulo lleno de amor y compañía. Únete a nosotros en esta hermosa misión de darles un hogar y una segunda oportunidad a estos maravillosos seres. juntos, ¡podemos hacer la diferencia!</p>
          </div>
          <div className="image">
            <img src={About} alt="Sobre Nosotros" />
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="container-page">
          <div className="card">
            <h2>Contáctanos</h2>
            <p>¿Listo para cambiar una vida? ¡Únete a nuestra misión de amor!</p>
            <a href="mailto:contact@adoptapatitas.org.com" target="_blank"><AiOutlineMail color="#402751" size={20} /> contact@adoptapatitas.org.com</a>
            <a href="telf:+123456789" target="_blank"><LuPhone color="#402751" size={20}/>(123) 456 -789</a>
            <a href="https://www.google.com/maps/place/794+McAllister+St,+San+Francisco,+CA+94102,+EE.+UU./@37.7799355,-122.4277362,17z/data=!3m1!4b1!4m6!3m5!1s0x808580a2b15f8d2b:0x36df21e94cffd932!8m2!3d37.7799355!4d-122.4251559!16s%2Fg%2F11c2665dn6?entry=ttu"  target="_blank"><HiOutlineLocationMarker color="#402751" size={20}/> 794 Mcallister St<br/>San Francisco, 94102</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home