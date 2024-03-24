import "../assets/estilos/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <Link to="/">Home</Link> |<Link to="/pokemones">Pokemones</Link> |
        <Link to="/favoritos">Favoritos</Link>
      </footer>
    </>
  );
}

export default Footer;
