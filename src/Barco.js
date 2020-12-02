import { useState } from "react";

function Barco(props) {
  const [tripulantes, setTripulantes] = useState(0);
  function sumarTripulante() {
    setTripulantes(tripulantes + 1);
    props.sumarVisitante();
  }
  return (
    <div>
      <h1>{props.nombre}</h1>
      <p>Eslora: {props.eslora}m</p>
      <p>Tripulantes: {tripulantes}</p>
      <p>Tipo: {props.tipo}</p>
      <button onClick={sumarTripulante}>Tripulantes</button>
    </div>
  );
}

export default Barco;
