
import ContactSidebar from "../../Components/ContactSidebar/ContactSidebar";
import { Outlet, useParams } from "react-router"; 
import './Contactos.css'

export default function Contactos() {
  const { contact_id } = useParams(); 

  return (
    /* Usamos tu clase .container y le sumamos .chat-abierto si hay ID */
    <div className={`container ${contact_id ? 'chat-abierto' : ''}`}>
      
      <ContactSidebar />

      {/* Usamos tu clase .chat-container */}
      <div className="chat-container">
        <Outlet /> 
      </div>

    </div>
  );
}