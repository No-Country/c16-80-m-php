import Image from '../../assets/match.png';

function Banner() {
  return (
    <section className='banner max-h-[546px]'>
      <img src={Image} className='max-h-[546px] object-cover w-full' alt="Encuentra tu mascota perfecta" />
    </section>
  )
}

export default Banner;