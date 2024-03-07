import React, { useState } from 'react';
import '../css/match.css';
import Step1 from '../components/common/step1';
import Step2 from '../components/common/step2';
import Banner from '../components/common/banner';

function Match() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedValue, setSelectedValue] = useState("");

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

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Banner />
      <section className='quiz mt-5 mb-8 flex items-center justify-center bg-[]'>
        <div className='container-page flex-col'>
          <h1 className='w-full text-center font-bold text-[32px] leading-9 text-[#81539F] mb-4'>Vamos a encontrar el peludito perfecto para ti!</h1>
          <div className='form w-full border-[1px] border-[#C6B8E8] rounded-[20px] p-[37px]'>
            <h2 className='w-full font-bold text-[24px] leading-[26px] text-[#402751]'>{currentStep===1 ? 'Cuéntanos un poco sobre ti:':`Cuéntanos sobre tu perro ideal:`}</h2>
            <span className='steps block w-full text-right text-[14px] leading-[16.94px] text-[#81539F]'>Paso {currentStep} <span className='text-[#83898C]'>de 2</span></span>
            <div className={`bar-steps h-[6px] w-full bg-[#F4F1FA] rounded-[20px] mt-5 mb-8 relative before:h-[12px] before:bg-[#81539F] ${currentStep===1?'before:w-1/2':'before:w-full'} before:absolute before:rounded-[20px] before:top-[-3px]`}></div>
            {currentStep === 1 && (
             <Step1 onSelectChange={handleSelectChange}/>
            )}
            {currentStep === 2 && (
              <Step2 selectOption={selectedValue}/>
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