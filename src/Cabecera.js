import { Link } from "react-router-dom";

function Cabecera() {
  return (
    <header>
      <h1>Muelle de Naves</h1>
      <nav>
        <ul>
          <li>
            <Link to="/barcos">Barcos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/">Inicio</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Cabecera;
