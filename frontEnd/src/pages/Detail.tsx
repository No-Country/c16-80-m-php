import Slider from 'react-slick';

function Detail() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='flex items-center justify-center flex-col'>
      <section className='slider container-page'>
          <div className='max-w-[50%]'>
            <Slider {...settings}>
              <div>
                <img src='src/assets/kyra.jpeg' alt="Kyra" className="image" />
              </div>
              <div>
                <img src='src/assets/kyra.jpeg' alt="Kyra" className="image" />
              </div>
            </Slider>
          </div>
          <div className='info max-w-[50%]'>
            <h1 className='name'>Tina</h1>
            <div className='caracteristicas'><span>Mestizo</span><span>Cachorro</span><span>Mediano</span><span>Muy Activo</span></div>
            <h2>Cómo soy?</h2>
            <div></div>
          </div>
      </section>
      <div className='container-page'>
        <section className='detail'>

        </section>
      </div>
    </div>
  )
}

export default Detail