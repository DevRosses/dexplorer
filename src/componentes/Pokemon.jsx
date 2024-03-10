import { Link } from "react-router-dom";
function Pokemon(props) {
    const { name, url } = props;

    let urlCortada = url.split('/')
    console.log(urlCortada);

    return ( <>
    <li> 
        <Link to={'/pokemones/'+ urlCortada[6]} > { name } </Link>
    </li>
    </> );
}

export default Pokemon;