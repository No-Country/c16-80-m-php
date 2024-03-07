import { AiOutlineClose } from "react-icons/ai";
import Icon from '../../assets/icon.png';
import '../../css/modal.css';

interface ModalProps {
  open: boolean;
  close: () => void; // Function to close the modal
}

function Modal({ open, close }: ModalProps) {
  return (
    <div className={`modal z-10 fixed inset-0 flex justify-center items-center bg-[#3f3a3a79] ${open ? "visible " : "invisible"} `}>
      <div className={`modal-content relative max-w-md w-full h-auto max-h-[700px] rounded-[16px] border-[#1D1C1D21] flex flex-col justify-start items-center bg-white  transition-colors border}`}>
        <div className="absolute top-6 right-6" onClick={close}>
          <AiOutlineClose />
        </div>
        <div className="title w-full p-[20px] px-[30px] flex items-center justify-start">
          <img src={Icon} alt="Búsqueda avanzada"/>Búsqueda avanzada
        </div>
        <div className="fields justify-center flex-col gap-5 md:flex-row md:justify-between items-center flex w-full pb-[20px] md:p-[20px] md:px-[30px]">
          <label className="flex items-start justify-start flex-col">Especie
            <select name="especie" id="especie">
              <option value="">Cualquiera</option>
            </select>
          </label>
          <label className="flex items-start justify-start flex-col">Estado
            <select name="estado" id="estado">
              <option value="">Cualquiera</option>
            </select>
          </label>
        </div>
        <div className="fields justify-center flex-col gap-5 md:flex-row md:justify-between items-center flex w-full pb-[20px] md:p-[20px] md:px-[30px]">
          <label className="flex items-start justify-start flex-col">Raza
            <select name="raza" id="raza">
              <option value="">Cualquiera</option>
            </select>
          </label>
          <label className="flex items-start justify-start flex-col">Sexo 
            <select name="sexo" id="sexo">
              <option value="">Cualquiera</option>
            </select>
          </label>
        </div>
        <div className="match flex items-center justify-center">
          <a href="/match">¿Quieres encontrar tu Match perfecto?</a>
        </div>
        <div className="buttons w-full p-[20px] px-[30px] flex items-center justify-end gap-5 border-t border-[#1D1C1D21]">
          <div className="cancel" onClick={close}>Cancelar</div>
          <a className="search" href="/result">Buscar</a>
        </div>
      </div>
    </div>
  )
}

export default Modal;