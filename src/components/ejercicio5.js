import react,{useState} from "react";

const Ejercicio5=() => {
    const[numero, setNumero]= useState(0);

    const lanzarDado=()=>{
        const numAle=Math.floor(Math.random()*6)+1;
        setNumero(numAle);
    };

    return (
        <div>
            <h1>Lanzar dado</h1>
            <button onClick={lanzarDado}>Lanzar</button>
            <p>Número girado: {numero}</p>
        </div>
    );
};

export default Ejercicio5;