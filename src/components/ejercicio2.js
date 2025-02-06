import React,{Component} from 'react';

const Ejercicio2=()=>{
    const[dia,setDias] = useState("");
    const cambioDias=(e,setDia)=>{
        setDia(e.target.value);
    }

    return(
        <div>
            <h1>Selección de día de la semana</h1>
            <select onChange={(e)=>cambioDias(e,setDia)}>
                <option value="Lunes">Lunes</option>
                <option value="Martes">Martes</option>
                <option value="Miércoles">Miércoles</option>
                <option value="Jueves">Jueves</option>
                <option value="Viernes">Viernes</option>
                <option value="Sábado">Sábado</option>
                <option value="Domingo">Domingo</option>
            </select>
            <p>{dia? `Has seleccionado: ${dia}` : 'Aún no has seleccionado ningún día'}</p>
        </div>
    );
};