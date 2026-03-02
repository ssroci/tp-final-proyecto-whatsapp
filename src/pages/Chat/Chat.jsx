import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import './Chat.css'

export default function Chat() {
  const { contacts } = useContext(ContactsContext)
  const { contact_id } = useParams()
  const navigate = useNavigate()

  const contact_selected = contacts.find(
    contact => Number(contact.id) === Number(contact_id)
  )

  if (!contact_selected) {
    return <h1>El contacto seleccionado no existe</h1>
  }

  return (
   <div className='chat-seleccionado' key={contact_id}>
      <div className='contacto-seleccionado'>
         <i className="bi bi-arrow-left-square-fill"  onClick={() => navigate(-1)}></i> 
        <h2 className='nombreseleccionado'>{contact_selected.name}</h2>
        
      </div>
      <div className='mensaje-chat'>
        {contact_selected.mensajes.map(mensaje => (
          <div
  key={mensaje.id}
  className={`mensaje-burbuja ${
    mensaje.send_by_me ? "mio" : "otro"
  }`}
>
            <h3 className='mensaje_chat'>
              {mensaje.send_by_me
                ? ''
                : ` ${contact_selected.name}`}
            </h3>
            <p className='mensaje_texto'>{mensaje.text}</p>
            <span>{mensaje.time}</span>
          
          </div>
        ))}
      </div>

      <form className='chat-form'>
       
        <textarea className='escribeunmensaje' placeholder="Escribe un mensaje..." />
      <i className="bi bi-arrow-up-square-fill"></i>
       
      </form>
    </div>
  )
}