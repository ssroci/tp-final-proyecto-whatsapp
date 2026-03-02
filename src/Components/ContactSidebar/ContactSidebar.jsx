import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { ContactsContext } from "../../Context/ContactsContext";
import "./ContactSidebar.css";

export default function ContactSidebar() {
  const { contacts } = useContext(ContactsContext);
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(search.toLowerCase())
);
  return (

    <div className="sidebar-lista">

      <div className="primeraparte">
        <h2 className="Chats"> WhatsApp</h2>
        <i className="bi bi-folder-plus"></i>
        <i className="bi bi-three-dots-vertical"></i>
      </div>
      <div className="barra-busqueda">
        <input
          type="text"
          placeholder="Buscar un chat..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="contactos-sidebar">
        {filteredContacts.map((contact) => (
          <Link
            key={contact.id}
            to={`/contactos/${contact.id}`}
            className="contacto-chat"
          >
            <img
              src={contact.imagen_perfil}
              alt={contact.name}
              className="foto-perfil"
            />

            <div className="informacion">
              <div className="_información">
                <h3 className="nombre">{contact.name}</h3>
                <span className="conexión">{contact.ultima_conexión}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}