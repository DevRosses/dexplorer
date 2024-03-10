import { Link } from 'react-router-dom';

function Header() {
  return (<>
    <header>
      <nav>
      <Link to="/">Home</Link> |
        <Link to="/pokemones">Pokemones</Link> |
      </nav>
    </header>
  </>);
}

export default Header;