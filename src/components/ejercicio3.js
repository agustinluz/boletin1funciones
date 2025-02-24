/**
 * Crear una aplicación con dos elementos tipo text en la que los valores introducidos en uno
    de ellos se reflejen automáticamente en el otro
 */
import React,{useState} from "react";

const Ejercicio3=()=>{
    const [texto,setTexto]=useState("nombre");

    const cambioTexto=(e)=>{
        setTexto(e.target.value);
    };

    return(
        <div>
            <h1>SINCRONIZACION DE 2 INPUTS</h1>
            <input type="text" 
                value={texto} onChange={cambioTexto} 
                placeholder="Escribe algo para que se cambie en el otro input"/>

            <input type="text" 
                value={texto} onChange={cambioTexto} 
                placeholder="Escribe algo para que se cambie en el otro input"/>
        </div>
        
    );
};
export default Ejercicio3;  
