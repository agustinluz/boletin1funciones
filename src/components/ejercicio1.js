import React, { useState } from 'react';

const Ejercicio1 = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const sumarNumeros = () => {
        const suma = num1 + num2;
        alert(`La suma es: ${suma}`);
    };



    return(
        <div>
            <h1>Suma de dos números</h1>
            <input type="number" value={num1}  />
            <input type="number" value={num2}  />
            <button onClick={sumarNumeros}>Sumar</button>
        </div>
    )
};

export default Ejercicio1;