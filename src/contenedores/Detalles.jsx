import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';


function Detalles() {
    const location = useLocation();
    const [pokemon, setPokemon] = useState();

    const traemePokemon = async () => {

        // REVISAR SINO ESTA EN USAR CONTEXTO

        //recupero el nombre del pokemon de la URL
        const pedazos = location.pathname.split('/');
        const url = 'https://pokeapi.co/api/v2/pokemon/' + pedazos[2] + '/';

        //solicito  los datos al API y guardo en estado
        const res = await axios.get(url)
        setPokemon(res.data)
    }

    useEffect(
        () => {
            traemePokemon();
        }, []);



    return (<>
        <p>{pokemon?.name}</p>
        <img src={pokemon?.sprites.other.dream_world.front_default} alt="" />
        <h3>Tipo</h3>
        <ul>
            {pokemon?.types.map((tipo, i) => <li key={i}>{tipo.type.name}</li>)}
        </ul> 
    </>)
}

export default Detalles;
