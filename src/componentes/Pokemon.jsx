import { Link } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";

// lista de pokemons
function Pokemon(props) {
    const { name, url } = props;
    const { guardamePokemon } = useContext(Contexto)
    

    let urlCortada = url.split('/')

    const handleGuardar = ()=>{
        let hijo = {name:name , url:url}
        guardamePokemon( hijo )
    }


    return (<>
        <li>
            <Link to={'/pokemones/' + urlCortada[6]} > {name} </Link>
            <button onClick={handleGuardar}>Guardar Fav</button>
        </li>
    </>);
}

export default Pokemon;