import Card from "./common/card";
import '../css/adopt.css'

function Adopt() {
  return (
    <section id="adopt" className="adopt">
        <div className="container-page">
          <div className="tab">
            <a href="#">Disponibles</a>
            <a href="#">Perros</a>
            <a href="#">Gatos</a>
            <a href="#">Otras mascotas</a>
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