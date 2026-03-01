import React from 'react'
import { Route, Routes } from 'react-router'
import Login from "./pages/Login/Login";
import Contactos from "./pages/Contactos/Contactos";
import Chat from "./pages/Chat/Chat";
import Error from "./pages/Error/Error"; 
import ContactsContextProvider from './Context/ContactsContext';
import './App.css'

function App() {
  return (
    <ContactsContextProvider> 
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/contactos" element={<Contactos />}>
          <Route path=":contact_id"  element={<Chat key={window.location.pathname} />} 
  />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </ContactsContextProvider>
  )
}

export default App
