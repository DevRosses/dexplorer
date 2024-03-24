import { useEffect, useContext } from "react";
import '../assets/estilos/lista.css'
import Contexto from "../contexto/Contexto";
import Pokemon from '../componentes/Pokemon'

function Lista() {
    const { pokemones, traemePokemones } = useContext(Contexto)

    useEffect(
        () => {
            traemePokemones( );
        }, []);

    return (<>
    <div className="lista">
            {pokemones.map((pokemon, i) => <Pokemon {...pokemon} key={i}></Pokemon>)}
        </div>
    </>);
}


export default Lista;