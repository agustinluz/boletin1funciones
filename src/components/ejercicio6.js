import React, { useState } from 'react';
import './Dado.css';

const Dado = () => {
    // Aquí guardamos el número de jugadores
    const [jugadores, setJugadores] = useState(0);
    // Aquí guardamos los nombres de los jugadores
    const [nombreJugadores, setNombreJugadores] = useState([]);
    // Aquí guardamos los puntos de cada jugador
    const [puntos, setPuntos] = useState(Array(4).fill(Array(7).fill(0)));
    // Aquí guardamos la ronda actual
    const [ronda, setRonda] = useState(0);

    // Esta función se llama cuando seleccionamos el número de jugadores
    const asignaJugadores = (event) => {
        setJugadores(Number(event.target.value));
    };

    // Esta función se llama para preguntar los nombres de los jugadores
    const preguntaNombres = () => {
        const nuevosJugadores = [];
        for (let i = 1; i <= jugadores; i++) {
            let nombreJug = prompt(`Introduce el nombre del Jugador ${i}`, `Jugador ${i}`);
            nuevosJugadores.push(nombreJug);
        }
        setNombreJugadores(nuevosJugadores);
    };

    // Esta función se llama para lanzar el dado
    const lanzaDado = () => {
        if (nombreJugadores.length <= 1) {
            alert("Debes asignar los jugadores");
        } else {
            const nuevosPuntos = puntos.map((jugador, i) => {
                if (i < jugadores) {
                    const numAleatorio = Math.floor(Math.random() * 6 + 1);
                    const nuevosJugadorPuntos = [...jugador];
                    nuevosJugadorPuntos[ronda] = numAleatorio;
                    const sumaPuntos = nuevosJugadorPuntos[5] + numAleatorio;
                    nuevosJugadorPuntos[5] = sumaPuntos;
                    nuevosJugadorPuntos[6] = (sumaPuntos / (ronda + 1)).toFixed(2);
                    return nuevosJugadorPuntos;
                }
                return jugador;
            });
            setPuntos(nuevosPuntos);
            setRonda(ronda + 1);
        }
    };

    // Esta función se llama para mostrar el ganador
    const muestraGanador = () => {
        let mayorPuntuacion = 0;
        let ganador = "";

        for (let i = 0; i < jugadores; i++) {
            const puntuacionTotal = puntos[i][5];
            if (puntuacionTotal > mayorPuntuacion) {
                mayorPuntuacion = puntuacionTotal;
                ganador = nombreJugadores[i];
            }
        }

        alert(`El ganador es ${ganador} con ${mayorPuntuacion} puntos.`);
    };

    return (
        <div>
            <p>
                <select value={jugadores} onChange={asignaJugadores}>
                    <option value="" disabled>- Jugadores -</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button onClick={preguntaNombres} disabled={jugadores === 0}>Comenzar partida</button>
                <button onClick={lanzaDado} disabled={ronda === 5 || nombreJugadores.length === 0}>Tirar dados</button>
                <button onClick={muestraGanador} disabled={ronda !== 5 || nombreJugadores.length === 0}>Ver ganador</button>
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Jugador</th>
                        <th>RONDA 1</th>
                        <th>RONDA 2</th>
                        <th>RONDA 3</th>
                        <th>RONDA 4</th>
                        <th>RONDA 5</th>
                        <th>TOTAL</th>
                        <th>MEDIA</th>
                    </tr>
                </thead>
                <tbody>
                    {nombreJugadores.map((jugador, index) => (
                        <tr key={index}>
                            <td>{jugador}</td>
                            {puntos[index].map((punto, puntoIndex) => (
                                <td key={puntoIndex}>{punto}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dado;