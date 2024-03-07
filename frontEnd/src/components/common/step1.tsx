import React from "react";

type Props = {
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Step1({onSelectChange}: Props) {
  return (
    <fieldset className='step-1 grid grid-cols-1 md:grid-cols-2 gap-10'>
      <label htmlFor="type" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
        Te gustaría adoptar un:
        <select name="type" id="type" onChange={onSelectChange} className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
          <option disabled selected>Seleciona una respuesta</option>
          <option value='gato'>Gato</option>
          <option value='perro'>Perro</option>
          <option value='conejo'>Conejo</option>
          <option value='hamster'>Hamster</option>
        </select>
      </label>
      <label htmlFor="other-pet" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
        ¿Alguna otra mascota en casa?
        <input type="text" placeholder="Ingresa tu respuesta" required name="other-pet" id="other-pet" className='pl-1 bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'/>
      </label>
      <label htmlFor="children" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
        ¿Tienes niños en casa?
        <select name="children" id="children" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
          <option disabled selected>Seleciona una respuesta</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </label>
      <label htmlFor="where-live" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
        ¿Dónde vives?
        <select name="where-live" id="where-live" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
          <option disabled selected>Seleciona una respuesta</option>
          <option value="departamento">Departamento</option>
          <option value="casa con patio">Casa con patio</option>
          <option value="casa sin patio">Casa sin patio</option>
        </select>
      </label>
      <label htmlFor="dog" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
        ¿Tienes perro actualmente?
        <select name="dog" id="dog" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
          <option disabled selected>Seleciona una respuesta</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </label>
      <label htmlFor="who" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
        ¿Para quién estas adoptando?
        <select name="who" id="who" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
          <option disabled selected>Seleciona una respuesta</option>
          <option value="propio">Para un mi</option>
          <option value="familiar">Para un familiar</option>
          <option value="regalo">Para regalar</option>
        </select>
      </label>
      <label htmlFor="cat" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
        ¿Algún gato en casa?
        <select name="cat" id="cat" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
          <option disabled selected>Seleciona una respuesta</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </label>
    </fieldset>
  );
}

export default Step1;