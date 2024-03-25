import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../assets/estilos/detalles.css";

function Detalles() {
  const location = useLocation();
  const [pokemon, setPokemon] = useState();

  const traemePokemon = async () => {
    //recupero el nombre del pokemon de la URL
    const pedazos = location.pathname.split("/");
    const url = "https://pokeapi.co/api/v2/pokemon/" + pedazos[2] + "/";

    //solicito  los datos al API y guardo en estado
    const res = await axios.get(url);
    setPokemon(res.data);
  };

  useEffect(() => {
    traemePokemon();
  }, []);

  return (
    <>
      <div className="detalles">
        <div className="nom-img">
          <h2 className="name">{pokemon?.name}</h2>
          <img
            className="img"
            src={pokemon?.sprites.other.dream_world.front_default}
            alt=""
          />
        </div>
        <div className="datos">
          <h3>Tipo</h3>

          {pokemon?.types.map((tipo) => (
            <li key={tipo.type.name}>{tipo.type.name}</li>
          ))}

          <h3>Habilidades</h3>
          <li> {pokemon?.abilities[0].ability.name}</li>
        </div>
      </div>
    </>
  );
}

export default Detalles;
