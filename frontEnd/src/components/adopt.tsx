import Card from "./common/card";
import '../css/adopt.css'
import React, { useState } from "react";

function Adopt() {
  const [activeTab, setActiveTab] = useState('Disponibles');

  const handleTabActive = (event:React.MouseEvent<HTMLAnchorElement>,tab:string) => {
    event.preventDefault();
    setActiveTab(tab);
  };
  return (
    <section id="adopt" className="adopt">
        <div className="container-page">
          <div className="tab">
            <a href="#" className={activeTab==='Disponible'?"active":""} onClick={(event)=>{handleTabActive(event,'Disponible')}}>Disponibles</a>
            <a href="#" className={activeTab==='Perros'?"active":""} onClick={(event)=>{handleTabActive(event,'Perros')}}>Perros</a>
            <a href="#" className={activeTab==='Gatos'?"active":""} onClick={(event)=>{handleTabActive(event,'Gatos')}}>Gatos</a>
            <a href="#" className={activeTab==='Otras'?"active":""} onClick={(event)=>{handleTabActive(event,'Otras')}}>Otras mascotas</a>
          </div>
          <div className="result">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
          <div className="bottom">
            <div>&nbsp;</div>
            <span className="qty">120</span>
            <a href="#" className="more">Mostrar más</a>
          </div>
        </div>
      </section>
  )
}

export default Adopt;