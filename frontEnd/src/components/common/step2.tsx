type Props = {
  selectOption: string;
}

function Step2({ selectOption }: Props) {
  return (
    <fieldset className='step-2 grid grid-cols-1 md:grid-cols-2 gap-10'>
      <label htmlFor="ideal" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
        Mi {selectOption} ideal es:
        <input type="text" placeholder="Ingresa tu respuesta" name="ideal" id="ideal" className='pl-1 bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'/>
      </label>
      <label htmlFor="size-pet" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
        ¿Qué tamaño prefieres?
        <select name="size-pet" id="size-pet" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
          <option disabled selected>Seleciona una respuesta</option>
          <option value="pequeño">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>
        </select>
      </label>
      <label htmlFor="gender" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
        ¿Qué sexo prefieres?
        <select name="gender" id="gender" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
          <option disabled selected>Seleciona una respuesta</option>
          <option value="macho">Macho</option>
          <option value="hembra">Hembra</option>
          <option value="indiferente">Indiferente</option>
        </select>
      </label>
      <label htmlFor="special-needs" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
        ¿Estas abierto adoptar un perro con necesidades especiales?
        <select name="special-needs" id="special-needs" className='bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'>
          <option disabled selected>Seleciona una respuesta</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </label>
      <label htmlFor="breed" className='flex justify-center items-start flex-col font-bold text-[15px] leading-[22px] text-[#402751]'>
        ¿Qué raza te gustaría?
        <input type="text" placeholder="Ingresa tu respuesta" name="breed" id="breed" className='pl-1 bg-transparent border-[1px] border-[#81539F] rounded-[3px] w-full h-[34px] text-[#402751CC] text-[16px] leading-[22.4px] mt-1'/>
      </label>
    </fieldset>
  )
}

export default Step2;