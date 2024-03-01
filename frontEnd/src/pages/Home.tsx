import About from '../assets/about.png';
import '../css/home.css'
import Adopt from "../components/adopt";
import Contact from '../components/common/contact';


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
      <Contact />
    </>
  )
}

export default Home