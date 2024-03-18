import { useContext } from "react";
import Contexto from "../contexto/Contexto";
//import BotonEliminarFavorito from '../componentes/btnEliminarFav';

// lista de pokemons favoritos
function Favorito(props) {
    const { name, url } = props;

    return (<>
        <li>
     <p>Hola soy un favorito</p>
     <p>Nombre: {name}</p>
     
     <img src={pokemon?.sprites.other.dream_world.front_default} alt="" />
      <img src={url} alt="imagen" /> 
        </li>

    </>)

};



export default Favorito;
