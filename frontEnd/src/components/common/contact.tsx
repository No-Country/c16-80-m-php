import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import '../../css/contact.css';
import { HiOutlineLocationMarker } from "react-icons/hi";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container-page">
        <div className="card">
          <h2>Contáctanos</h2>
          <p>¿Listo para cambiar una vida? ¡Únete a nuestra misión de amor!</p>
          <a href="mailto:contact@adoptapatitas.org.com" target="_blank"><AiOutlineMail color="#402751" size={20} /> contact@adoptapatitas.org.com</a>
          <a href="telf:+123456789" target="_blank"><LuPhone color="#402751" size={20} />(123) 456 -789</a>
          <a href="https://www.google.com/maps/place/794+McAllister+St,+San+Francisco,+CA+94102,+EE.+UU./@37.7799355,-122.4277362,17z/data=!3m1!4b1!4m6!3m5!1s0x808580a2b15f8d2b:0x36df21e94cffd932!8m2!3d37.7799355!4d-122.4251559!16s%2Fg%2F11c2665dn6?entry=ttu" target="_blank"><HiOutlineLocationMarker color="#402751" size={20} /> 794 Mcallister St<br />San Francisco, 94102</a>
        </div>
      </div>
    </section>
  )
}

export default Contact;