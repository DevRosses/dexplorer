import '../assets/estilos/Header.css'
import Logo from '../assets/estaticos/pokemon.png';

function Header() {
  return (<>
    <header className='header'>
      <img className='logo' src= {Logo} alt="" />
    </header>
  </>);
}

export default Header;
