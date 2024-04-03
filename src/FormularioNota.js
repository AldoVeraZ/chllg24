import React, { useState } from "react";
import logo from "./logo/logo.png";

function FormularioNota({ agregarNota }) {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarNota(titulo, contenido);
    setTitulo("");
    setContenido("");
  };

  return (
    <div>
      <img src={logo} alt="" />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título"
          required
        />
        <textarea
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          placeholder="Contenido"
          required
        ></textarea>
        <button type="submit">Agregar Nota</button>
      </form>
    </div>
  );
}

export default FormularioNota;
