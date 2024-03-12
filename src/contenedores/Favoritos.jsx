import { useContext } from 'react';
import Contexto from '../contexto/Contexto';
import Favorito from '../componentes/Favorito';

function Favoritos() {
    const { favoritos } = useContext(Contexto);
    
    return (<>
        <div>
            <h2>Mis Favoritos:</h2>
            <ul>
                {favoritos.map((favorito,i) => 
                <Favorito {...favorito} key={i}></Favorito>
                )}
            </ul>
        </div>
    </>);
}

export default Favoritos;