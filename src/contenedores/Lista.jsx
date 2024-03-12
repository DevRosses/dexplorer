import { useEffect, useContext } from "react";
import Contexto from "../contexto/Contexto";
import Pokemon from '../componentes/Pokemon'

function Lista() {
    const { pokemones, traemePokemones } = useContext(Contexto)

    useEffect(
        () => {
            traemePokemones( );
        }, []);

    return (<>
        <h2>somos los POKEMONES</h2>
        <ul>
            {pokemones.map((pokemon, i) => <Pokemon {...pokemon} key={i}></Pokemon>)}
        </ul>

    </>);
}


export default Lista;