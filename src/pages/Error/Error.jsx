import React  from "react";
import { Link } from "react-router-dom";

export default function Errorpagina(){
return (
<div> 
    <h1> Página no encontrada </h1>
    <p> La página que está buscando no existe o ha sido movida </p>
    <Link to="/"> Volver al incio </Link>
</div>

)

}