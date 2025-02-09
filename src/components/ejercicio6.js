/*
Utilizar el componente anterior para crear un juego de 2 a 4 jugadores. Al inicio pedirá el
número de participantes, el nombre de cada uno y posteriormente realizará las tiradas por
turnos, hasta un total de 5. Irá mostrando la puntuación parcial junto con la media y al
acabar mostrará la clasificación final.
*/import React, { useState } from "react";
import { Button, Form, Table } from 'react-bootstrap';

const JuegoDados = () => {
    const [jugadores, setJugadores] = useState([]);
    const [tiradas, setTiradas] = useState([]);
    const [turno, setTurno] = useState(0);
    const [puntuaciones, setPuntuaciones] = useState([]);

    const addJugador = (e) => {
        e.preventDefault();
        let jugador = e.target.jugador.value;
        setJugadores([...jugadores, jugador]);
        e.target.jugador.value = "";
    };

    const addTirada = () => {
        let tirada = Math.floor(Math.random() * 6) + 1;
        setTiradas([...tiradas, tirada]);
        setTurno(turno + 1);
    };

    const calcularMedia = () => {
        let suma = 0;
        for (let i = 0; i < puntuaciones.length; i++) {
            suma += puntuaciones[i];
        }
        return suma / puntuaciones.length;
    };

    const calcularClasificacion = () => {
        let clasificacion = jugadores.slice();
        clasificacion.sort((a, b) => {
            let puntuacionA = puntuaciones[jugadores.indexOf(a)];
            let puntuacionB = puntuaciones[jugadores.indexOf(b)];
            return puntuacionB - puntuacionA;
        });
        return clasificacion;
    };

    const calcularPuntuacion = () => {
        let puntuacion = 0;
        for (let i = 0; i < tiradas.length; i++) {
            puntuacion += tiradas[i];
        }
        return puntuacion;
    };

    return (
        <div>
            {/* Aquí iría el código JSX para renderizar el componente */}
        </div>
    );
};

export default JuegoDados;