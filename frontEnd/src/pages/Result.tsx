import Card from "../components/common/card";
import Contact from "../components/common/contact";
import '../css/result.css';

function Result() {
  return (
    <>
      <section className="result flex items-center justify-center bg-[#F4F1FA]">
        <div className="container-page">
          <h1 className="hidden">Resultados de busqueda</h1>
          <h2 className="text-center w-full">"Descubre a tu compañero ideal: perros encantadores esperando ser adopatados"</h2>
          <div className="flex items-center justify-between gap-10 flex-wrap mb-6">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
          <div className="flex items-center justify-between mb-8 w-full">
            <div>&nbsp;</div>
            <span className="qty">120</span>
            <a href="#" className="more">Mostrar más</a>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}

export default Result;