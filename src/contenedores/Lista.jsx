import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from '../componentes/Pokemon'

function Lista() {

    const [pokemones, setPokemones] = useState([]);

    const traemePokemones = async ()=>{
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        setPokemones(res.data.results)
    }

    useEffect(
        () => {
            traemePokemones();
        }, []);

        console.log('Esta es la lista de pokemones: ', pokemones );

    return ( <>
    <h2>somos los POKEMONES</h2>
    <ul>
        {pokemones.map((pokemon) => <Pokemon {...pokemon} Key={pokemon.name}></Pokemon> )}
    </ul>

    </> );
}

export default Lista;