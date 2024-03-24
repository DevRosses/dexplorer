import { Link } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import "../assets/estilos/pokemon.css";
import Fav from "../assets/estaticos/fav.png";

// lista de pokemons
function Pokemon(props) {
  const { name, url } = props;
  const { guardamePokemon } = useContext(Contexto);

  let urlCortada = url.split("/");

  const handleGuardar = () => {
    let hijo = { name: name, url: url, id: name };
    guardamePokemon(hijo);
  };

  return (
    <>
      <div className="pokemon">

        <div className="img-pokemon">

        </div>

        <div className="nombre-pokemon">
          <Link to={"/pokemones/" + urlCortada[6]}> {name} </Link>
          <img
            className="fav"
            src={Fav}
            alt="favorito"
            onClick={handleGuardar}
          />
        </div>
        
      </div>
    </>
  );
}

export default Pokemon;
