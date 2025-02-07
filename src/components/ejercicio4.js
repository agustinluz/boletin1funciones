import React, { useState } from 'react';

const Ejercicio4 = () => {
    const [productos,setProductos] = useState([]);
    const [nombre, setNombre]=useState("");
    const [precio, setPrecio]=useState(0.5);
    const [cantidad, setCantidad]=useState(1);
    
    const agregarProducto = () => {
        const total = precio * cantidad;
        setProductos([...productos, {nombre, precio, cantidad, total}]);

    };
    const cambioNombre = (event)=> {
        setNombre(event.target.value);
    }

    const cambioPrecio=(event)=>{
        setPrecio(Number(event.target.value));
    }
    const cambioCantidad=(event)=>{
        setCantidad(Number(event.target.value));
    }

    return (
        <div>
            <h1>Factura</h1>
            <input type="text" value={nombre} onChange={cambioNombre} placeholder="Nombre del producto"/>
            <input type="number" value={precio} onChange={cambioPrecio} />
            <input type="number"  value={cantidad} onChange={cambioCantidad} />
            <button onClick={agregarProducto}>Agregar</button>
            <h2>Productos</h2>
            <ul>
                {productos.map((item,index)=>(
                    <li key={index}>{item.nombre} - {item.precio}€ - {item.cantidad}U - {item.total}€</li>
                ))} 
                
            </ul>

        </div>

    )

};
export default Ejercicio4;