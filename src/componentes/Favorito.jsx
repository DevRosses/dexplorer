import { useContext } from "react";
import Contexto from "../contexto/Contexto";
//import BotonEliminarFavorito from '../componentes/btnEliminarFav';

// lista de pokemons favoritos
function Favorito(props) {
    const { name, url } = props;
    // obteniendo el contexto del provider
    const contexto = useContext(Contexto);
    return (<>
        <li>
     <p>Hola soy un favorito</p>
     
        </li>

    </>)

};



export default Favorito;
