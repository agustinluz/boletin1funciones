import React, { useState } from 'react';

const Ejercicio1 = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const sumarNumeros = () => {
        const suma = num1 + num2;
        alert(`La suma es: ${suma}`);
    };

    const cambioNumero = (e, setNumero) => {
        setNum1(Number(e.target.value));
    };



    return(
        <div>
            <h1>Suma de dos números</h1>
            <input type="number" value={num1} 
            onChange={(e)=> cambioNumero(e,setNum1)}  />
            <input type="number" value={num2} 
            onChange={(e)=> cambioNumero(e,setNum2)}  />
            <button onClick={sumarNumeros}>Sumar</button>
        </div>
    )
};

export default Ejercicio1;