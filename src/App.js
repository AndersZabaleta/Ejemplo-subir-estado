import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { useState } from "react";

import Cabecera from "./Cabecera";
import Barcos from "./Barcos";
import Contacto from "./Contacto";
import Footer from "./Footer";

function App() {
  let [visitantes, setVisitantes] = useState(0);

  function sumarVisitante() {
    setVisitantes(visitantes + 1);
  }
  return (
    <BrowserRouter>
      <Cabecera />
      <section>
        <p>Hemos tenido {visitantes} visitantes</p>
      </section>
      <Route path="/barcos">
        <Barcos sumarVisitante={sumarVisitante} />
      </Route>
      <Route path="/contacto">
        <Contacto />
      </Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
