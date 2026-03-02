
import ContactSidebar from "../../Components/ContactSidebar/ContactSidebar";
import { Outlet, useParams } from "react-router"; 
import './Contactos.css'

export default function Contactos() {
  const { contact_id } = useParams(); 

  return (
   
    <div className={`container ${contact_id ? 'chat-abierto' : ''}`}>
      
      <ContactSidebar />

     
      <div className="chat-container">
        <Outlet /> 
      </div>

    </div>
  );
}