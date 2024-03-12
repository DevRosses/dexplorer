import React from 'react';
import Contexto from '../contexto/Contexto';
import { useContext } from 'react';

function BtnEliminarFav(id) {
    const { eliminaDeFavoritos } = useContext(Contexto);

    const handleEliminar = () => {
        eliminaDeFavoritos(id);
    };

    return (
        <button onClick={handleEliminar}>Eliminar Favorito</button>
    );
}

export default BtnEliminarFav;