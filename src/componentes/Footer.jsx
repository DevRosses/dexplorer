import "../assets/estilos/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <Link className='text-link' to="/">Home</Link> 
        <Link className='text-link' to="/pokemones">Pokemones</Link> 
        <Link className='text-link' to="/favoritos">Favoritos</Link>
      </footer>
    </>
  );
}

export default Footer;
