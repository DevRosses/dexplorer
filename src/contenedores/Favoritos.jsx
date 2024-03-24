import { useContext } from 'react';
import '../assets/estilos/favoritos.css'
import Contexto from '../contexto/Contexto';
import Favorito from '../componentes/Favorito';

function Favoritos() {
    const { favoritos } = useContext(Contexto);
    return (<>
        <div className='favoritos'>
                {favoritos.map((favorito,i) => 
                <Favorito {...favorito} key={i}></Favorito>
                )}
        </div>
    </>);
}

export default Favoritos;