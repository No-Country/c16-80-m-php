import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import '../css/search.css';
import Modal from "./common/modal";


function Search() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='search-container' onClick={()=>setOpen(true)}>
        <AiOutlineSearch className="search-icon" color='#81539F' size={24} />
        <input type="search" className="search-input" placeholder="Busqueda avanzada" readOnly/>
      </div>
      <Modal open={open} close={()=>setOpen(false)}/>
    </>
  )
}

export default Search;