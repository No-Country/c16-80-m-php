import { AiOutlineHeart } from  "react-icons/ai";
import '../../css/card.css';

function Card() {
  return (
    <div className="card">
      <img src='src/assets/kyra.jpeg' alt="Kyra" className="image" />
      <a href="#" className="wishlist"><AiOutlineHeart color="#81539F" size={32} /></a>
      <span className="name">Kyra</span>
      <a href="/detail" className="detail">Consultar</a>
    </div>
  )
}

export default Card;