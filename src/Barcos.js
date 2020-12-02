import barcos from "./arraybarcos";
import Barco from "./Barco";

function Barcos(props) {
  //   const mostrarBarcos = barcos.map(function (barco) {
  //     return (
  //       <Barco
  //         nombre={barco.nombre}
  //         eslora={barco.eslora}
  //         tipo={barco.tipo}
  //         tripulantes={barco.tripulantes}
  //       />
  //     );
  //   });
  return (
    <>
      {barcos.map((barco) => (
        <Barco
          nombre={barco.nombre}
          eslora={barco.eslora}
          tripulantes={barco.tripulantes}
          tipo={barco.eslora}
          sumarVisitante={props.sumarVisitante}
        />
      ))}
    </>
  );
}
export default Barcos;
