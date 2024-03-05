import { useState } from 'react';
import Banner from '../assets/match.png';
import '../css/match.css';

function Match() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleContinue = () => {
    setCurrentStep(currentStep === 1 ? 2 : 1);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSeeResults = () => {
    // Realizar la filtración aquí
    // ...
  };

  return (
    <>
      <section className='banner max-h-[546px]'>
        <img src={Banner} className='max-h-[546px] object-cover w-full' alt="Encuentra tu mascota perfecta"/>
      </section>
      <section className='quiz mt-5 mb-8 flex items-center justify-center bg-[]'>
        <div className='container-page'>
          <h1 className='w-full text-center font-bold text-[32px] leading-9 text-[#81539F] mb-4'>Vamos a encontrar el peludito perfecto para ti!</h1>
          <div className='form w-full border-[1px] border-[#C6B8E8] rounded-[20px] p-[37px]'>
            <h2 className='w-full font-bold text-[24px] leading-[26px] text-[#402751]'>{currentStep===1 ? 'Cuéntanos un poco sobre ti:':`Cuéntanos sobre tu perro ideal:`}</h2>
            <span className='steps block w-full text-right text-[14px] leading-[16.94px] text-[#81539F]'>Paso {currentStep} <span className='text-[#83898C]'>de 2</span></span>
            <div className={`bar-steps h-[6px] w-full bg-[#F4F1FA] rounded-[20px] mt-5 mb-8 relative before:h-[12px] before:bg-[#81539F] ${currentStep===1?'before:w-1/2':'before:w-full'} before:absolute before:rounded-[20px] before:top-[-3px]`}></div>
            {currentStep === 1 && (
              <fieldset className='step-1 grid grid-cols-2 gap-10'>
                <label htmlFor="type" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
                  Te gustaría adoptar un:
                  <select name="type" id="type" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
                    <option disabled selected>Seleciona una respuesta</option>
                  </select>
                </label>
                <label htmlFor="other-pet" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
                  ¿Alguna otra mascota en casa?
                  <select name="other-pet" id="other-pet" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
                    <option disabled selected>Seleciona una respuesta</option>
                  </select>
                </label>
                <label htmlFor="children" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
                  ¿Tienes niños en casa?
                  <select name="children" id="children" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
                    <option disabled selected>Seleciona una respuesta</option>
                  </select>
                </label>
                <label htmlFor="where-live" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
                  ¿Dónde vives?
                  <select name="where-live" id="where-live" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
                    <option disabled selected>Seleciona una respuesta</option>
                  </select>
                </label>
                <label htmlFor="dog" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
                  ¿Tienes perro actualmente?
                  <select name="dog" id="dog" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
                    <option disabled selected>Seleciona una respuesta</option>
                  </select>
                </label>
                <label htmlFor="who" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
                  ¿Para quién estas adoptando?
                  <select name="who" id="who" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
                    <option disabled selected>Seleciona una respuesta</option>
                  </select>
                </label>
                <label htmlFor="cat" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
                  ¿Algún gato en casa?
                  <select name="cat" id="cat" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
                    <option disabled selected>Seleciona una respuesta</option>
                  </select>
                </label>
              </fieldset>
            )}
            {currentStep === 2 && (
              <fieldset className='step-2 grid grid-cols-2 gap-10'>
              <label htmlFor="ideal" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
                  Mi perro ideal es:
                  <select name="ideal" id="ideal" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
                    <option disabled selected>Seleciona una respuesta</option>
                  </select>
                </label>
                <label htmlFor="size-pet" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
                  ¿Qué tamaño prefieres?
                  <select name="size-pet" id="size-pet" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
                    <option disabled selected>Seleciona una respuesta</option>
                  </select>
                </label>
                <label htmlFor="gender" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
                  ¿Qué sexo prefieres?
                  <select name="gender" id="gender" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
                    <option disabled selected>Seleciona una respuesta</option>
                  </select>
                </label>
                <label htmlFor="special-needs" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
                  ¿Estas abierto adoptar un perro con necesidades especiales?
                  <select name="special-needs" id="special-needs" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
                    <option disabled selected>Seleciona una respuesta</option>
                  </select>
                </label>
                <label htmlFor="breed" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
                  ¿Qué raza te gustaría?
                  <select name="breed" id="breed" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
                    <option disabled selected>Seleciona una respuesta</option>
                  </select>
                </label>
              </fieldset>
            )}
            <div className='buttons mt-6 flex items-center justify-end gap-3 pt-[20px] border-t-[1px] border-[#1D1C1D21]'>
              {currentStep === 1 ? (
                <a href="/" className='bg-[#F4F1FA] hover:bg-[#402751] border-[#F4F1FA] border-[1px] rounded-lg pt-[12px] pb-[12px] pl-[20px] pr-[20px] text-[#402751] hover:text-[#F4F1FA] text-[16px] leading-[16px] font-medium'>
                  Cancelar
                </a>
              ) : (
                <a href="#" className='bg-[#F4F1FA] hover:bg-[#402751] border-[#F4F1FA] border-[1px] rounded-lg pt-[12px] pb-[12px] pl-[20px] pr-[20px] text-[#402751] hover:text-[#F4F1FA] text-[16px] leading-[16px] font-medium' onClick={(e) => {e.preventDefault();handleBack();}}>
                  Atrás
                </a>
              )}
              <a href="#" onClick={currentStep === 1 ? (e) => {e.preventDefault();handleContinue();}:handleSeeResults} className='bg-[#81539F] hover:bg-[#F9F8F8] border-[#81539F] border-[1px] rounded-lg pt-[12px] pb-[12px] pl-[20px] pr-[20px] text-[#F9F8F8] hover:text-[#81539F] text-[16px] leading-[16px] font-medium'>
                {currentStep === 1 ? 'Continuar' : 'Ver tus partidos'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Match;