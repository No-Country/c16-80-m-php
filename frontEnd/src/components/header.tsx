import {FaBars, FaTimes } from  'react-icons/fa';
import { AiFillHeart }  from "react-icons/ai";
import Anchor from "./common/anchor";
import Logo from '../assets/logo.svg';
import '../css/header.css';
import { useRef } from 'react';
import Search from './search';

function Header() {
  const navRef: React.RefObject<HTMLElement> = useRef(null);
  
  const showNavBar = () => {
    if (navRef && navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };
  return (
    <header id='top'>
      <div className='container-page'>
        <button className='nav-btn' onClick={showNavBar}><FaBars color='#81539F' size={24}/></button>
        <a href='/' className='logo'><img src={Logo} alt="Adopta Patitas"/></a>
        
        <div  className='menu-access'>
          <a href='#home' className='wishlist'><AiFillHeart color="#81539F" size={24} /></a>
          <Anchor Href='#home' Text='Registrate' Class='register'/> 
          <Anchor Href='#home' Text='Iniciar sesión' Class='login'/> 
        </div>
      </div>
      <div className='container-page'>
        <nav ref={navRef} className='menu-bar'>
          <Anchor Href='/#top' Text='Inicio' Class='navBar' eventClick={()=>showNavBar()}/> 
          <Anchor Href='/#adopt' Text='Adopta' Class='navBar'  eventClick={()=>showNavBar()}/> 
          <Anchor Href='/#about' Text='Sobre nosotros' Class='navBar'  eventClick={()=>showNavBar()}/> 
          <Anchor Href='/#contact' Text='Contáctanos' Class='navBar'  eventClick={()=>showNavBar()}/> 
          <button className='nav-btn nav-close-btn' onClick={showNavBar}><FaTimes color='#81539F' size={24}/></button>
        </nav>
        <Search />
      </div>
    </header>
  )
}

export default Header