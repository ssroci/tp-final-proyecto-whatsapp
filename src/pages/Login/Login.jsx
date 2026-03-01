import React from "react";
import "./Login.css"
import { useNavigate } from "react-router"

function Login() {
  const navigate = useNavigate()


    return(
        <section className="login">
         <form className="Formulario">
          
            <label htmlFor="Usuario"> Usuario </label>
            <br />
            <input type="text"  className="usuario" />
            <br />
            <label htmlFor="Password">Contraseña</label>
            <br />
            <input type="password" className="password" />
            <br />
            <br />
         
            <button className="boton-ingresar" onClick  ={() => navigate("/contactos")}>
                   Ingresar </button>

         </form>
        
        </section>
    )
}

export default Login