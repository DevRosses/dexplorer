import { Link } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";

// lista de pokemons
function Pokemon(props) {
    const { name, url } = props;
    const { guardamePokemon } = useContext(Contexto)
    

    let urlCortada = url.split('/')

    const handleGuardar = ()=>{
        guardamePokemon(name, url)
    }


    return (<>
        <li>
            <Link to={'/pokemones/' + urlCortada[6]} > {name} </Link>
            <button onClick={handleGuardar}>Guardar Fav</button>
            {/* <button onClick={handleQuitar}>Eliminar Fav</button> */}
        </li>
    </>);
}

export default Pokemon;