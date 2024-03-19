import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import { Link } from "react-router-dom";


// lista de pokemons favoritos
function Favorito(props) {
  const { name, url , id } = props;
  const { eliminaDeFavoritos } = useContext(Contexto);
  
  let urlCortada = url.split('/')

  console.log('lo que tiene la url: ', url)

  const handleEliminar = ()=>{
    let hijo = {name:name , url:url ,id:id}
    eliminaDeFavoritos( hijo )
}

  return (
    <>
      <li>
      <Link to={'/pokemones/'+ urlCortada[6]} > {name} </Link>
        <button onClick={handleEliminar}>Eliminar Fav</button>
      </li>
    </>
  );
}

export default Favorito;
