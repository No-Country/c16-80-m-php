import Slider from 'react-slick';
import Contact from '../components/common/contact';
import '../css/detail.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import Image1 from '../assets/tina0.jpeg';
import Image2 from '../assets/tina1.jpeg';

function Detail() {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <>
      <div className='detail flex items-center justify-center flex-col pt-5 pb-5 bg-[#F4F1FA]'>
        <section className='container-page md:flex-row flex-col gap-5 items-start'>
            <div className='slider md:max-w-[49%] w-full'>
              <Slider {...settings} >
                <div>
                  <img src={Image1} alt="Tina" className="image" />
                </div>
                <div>
                  <img src={Image2} alt="Tina" className="image" />
                </div>
              </Slider>
            </div>
            <div className='info md:max-w-[49%] w-full flex items-start justify-between flex-col'>
              <h1 className='name'>Tina</h1>
              <div className='features flex items-center justify-start flex-wrap w-full'>
                <span>Mestizo</span>
                <span className='dot'></span>
                <span>Cachorro</span>
                <span className='dot'></span>
                <span>Mediano</span>
                <span className='dot'></span>
                <span>Muy Activo</span>
              </div>
              <h2>Cómo soy?</h2>
              <div className='about-pet flex items-center justify-start gap-3 flex-wrap'>
                <span>Bueno con gatos</span>
                <span>Bueno con niños</span>
                <span>Cariñoso</span>
                <span>Amoroso</span>
              </div>
              <h2>Me entregaron</h2>
              <div className='given'>
                <ul>
                  <li><AiFillCheckCircle color='#C6B8E8' className='icon' size={28}/>Esterilizado</li>
                  <li><AiFillCheckCircle color='#C6B8E8' className='icon' size={28}/>Vacunado</li>
                  <li><AiFillCheckCircle color='#C6B8E8' className='icon' size={28}/>Microship</li>
                </ul>
              </div>
            </div>
        </section>
        <section className='description container-page flex-col'>
          <h2 className='w-full'>Mi historia</h2>
          <p>Mi pequeña historia de vida comienza en un estacionamiento, a la orilla de una transitada avenida. Me descubrí robando una bolsa de basura y regresando a mi escondite, aparentemente para saciar mi hambre, ¿verdad? ¡Error! En realidad, estaba buscando comida para un cachorro desaliñado y pequeño que había decidido proteger y cuidar (¡ a pesar de ser solo un cachorro yo misma!). Cuando mi rescatador nos encontró a ambos y nos llevó al veterinario, su principal preocupación era el bienestar de mi joven compañero, y solo quería que estuviera a salvo. Ahora que ambos estamos protegidos y fuera de peligro, y ya no tengo que ser la "mamá" desinteresada que elegí ser, ¡finalmente puedo mostrar mi verdadera personalidad al mundo!"</p>
          <h3 className='w-full'>Formación</h3>
          <p>Entrenado en casa. Mi rescatador dice que soy bueno con esto, pero puede que necesite algo de entrenamiento adicional y paciencia.</p>
        </section>
        <section className='buttons container-page justify-center'>
          <a href="/match">¡Quero adoptarlo!</a>
        </section>
      </div>
      <Contact />
    </>
  )
}

export default Detail