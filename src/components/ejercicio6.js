/*
Utilizar el componente anterior para crear un juego de 2 a 4 jugadores. Al inicio pedirá el
número de participantes, el nombre de cada uno y posteriormente realizará las tiradas por
turnos, hasta un total de 5. Irá mostrando la puntuación parcial junto con la media y al
acabar mostrará la clasificación final.
*/
import React,{useState} from "react";
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

const juegoDados = () => {
    const [jugadores,setJugadores] = useState([]);
    const [tiradas,setTiradas] = useState([]);
    const [turno,setTurno] = useState(0);
    const [puntuaciones,setPuntuaciones] = useState([]);

    const addJugador = (e) => {
        e.preventDefault();
        let jugador = e.target.jugador.value;
        setJugadores([...jugadores,jugador]);
        e.target.jugador.value = "";
    }

    const addTirada = () => {
        let tirada = Math.floor(Math.random() * 6) + 1;
        setTiradas([...tiradas,tirada]);
        setTurno(turno + 1);
    }
    
    const calcularMedia = () => {
        let suma = puntuaciones.reduce((a, b) => a + b, 0);
        return suma / puntuaciones.length;
    }
    
    const calcularClasificacion = () => {
        let clasificacion = [...jugadores].sort((a, b) =>
             puntuaciones[jugadores.indexOf(b)] - puntuaciones[jugadores.indexOf(a)]);
        return clasificacion;
    }
    
    const calcularPuntuacion = () => {
        let puntuacion = 0;
        tiradas.forEach(tirada => puntuacion += tirada);
        return puntuacion;
    }
    
    const calcularPuntuaciones = () => {
        let puntuaciones = [];
        for (let i = 0; i < jugadores.length; i++) {
            let puntuacion = 0;
            for (let j = 0; j < tiradas.length; j++) {
                puntuacion += tiradas[j];
            }
            puntuaciones.push(puntuacion);
        }
        setPuntuaciones(puntuaciones);
    }
    
    return (
        <div>
            <h1>Juego de dados</h1>
            <Form onSubmit={addJugador}>
                <Form.Group>
                    <Form.Label>Nombre del jugador</Form.Label>
                    <Form.Control type="text" name="jugador" />
                </Form.Group>
                <Button type="submit">Añadir jugador</Button>
            </Form>
            <Button onClick={addTirada}>Lanzar</Button>
            {jugadores.length > 0 && (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Jugador</th>
                            <th>Puntuación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jugadores.map((jugador, index) => (
                            <tr key={index}>
                                <td>{jugador}</td>
                                <td>{puntuaciones[index]}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            )}
            {turno === 5 && (
                <div>
                    <h2>Clasificación final</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Posición</th>
                                <th>Jugador</th>
                                <th>Puntuación</th>
                            </tr>
                        </thead>
                        <tbody>
                            {calcularClasificacion().map((jugador, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{jugador}</td>
                                    <td>{puntuaciones[jugadores.indexOf(jugador)]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <p>Media: {calcularMedia()}</p>
                    <Button onClick={reiniciarJuego}>Reiniciar juego</Button>
                </div>
            )}
            
        </div>

    );


};

export default juegoDados;