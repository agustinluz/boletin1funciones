/**
 * 1. Crear una aplicación con dos controles tipo number y un botón. Al pulsar el botón deberá
    mostrarse en un alert la suma de los números.
*/
import React, { useState } from 'react';

const Ejercicio1 = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const sumarNumeros = () => {
        const suma = num1 + num2;
        alert(`La suma es: ${suma}`);
    };

    const cambioNumero = (e) => {
        setNum1(Number(e.target.value));
    };

    const cambioNumero2 = (e) => {
        setNum2(Number(e.target.value));
    };



    return(
        <div>
            <h1>Suma de dos números</h1>
            <input type="number" value={num1} 
            onChange={cambioNumero}  />
            <input type="number" value={num2} 
            onChange={cambioNumero2}  />
            <button onClick={sumarNumeros}>Sumar</button>
        </div>
    )
};

export default Ejercicio1;