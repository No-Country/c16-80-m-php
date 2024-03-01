import '../css/footer.css';
import Logo from '../assets/logo.svg';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import Anchor from './common/anchor';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container-page second-menu">
        <a href='/'><img src={Logo} alt='Adopta Patitas'/></a>
        <div className='footer-menu'>
          <Anchor Href='#questions' Text='Preguntas frecuentes' Class='navBar'/> 
          <Anchor Href='#newsletter' Text='Nuestro newsletter' Class='navBar'/> 
          <Anchor Href='#about' Text='Sobre nosotros' Class='navBar'/> 
          <Anchor Href='#contact' Text='Contáctanos' Class='navBar'/> 
        </div>
        <div className='social-media'>
          <a href='http://facebook.com' target='_blank'><AiOutlineFacebook color='#81539F' size={32}/></a>
          <a href='http://instagram.com' target='_blank'><AiOutlineInstagram color='#81539F' size={32}/></a>
          <a href='http://linkedin.com' target='_blank'><AiOutlineLinkedin color='#81539F' size={32}/></a>
        </div>
      </div>
      <div className="container-page copyright">
        <p>Adoptapatitas @ {currentYear}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer