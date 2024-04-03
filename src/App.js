import React, { useState, useEffect } from "react";
import ListaNotas from "./ListaNotas";
import FormularioNota from "./FormularioNota";

function App() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const notasGuardadas = JSON.parse(localStorage.getItem("notas")) || [];
    setNotas(notasGuardadas);
  }, []);

  useEffect(() => {
    localStorage.setItem("notas", JSON.stringify(notas));
  }, [notas]);

  const agregarNota = (titulo, contenido) => {
    const nuevaNota = { id: Date.now(), titulo, contenido, favorito: false };
    setNotas((notasAnteriores) => [...notasAnteriores, nuevaNota]);
  };

  const editarNota = (id, titulo, contenido) => {
    setNotas((notasAnteriores) =>
      notasAnteriores.map((nota) =>
        nota.id === id ? { ...nota, titulo, contenido } : nota
      )
    );
  };

  const eliminarNota = (id) => {
    setNotas((notasAnteriores) =>
      notasAnteriores.filter((nota) => nota.id !== id)
    );
  };

  const marcarFavorito = (id) => {
    setNotas((notasAnteriores) =>
      notasAnteriores.map((nota) =>
        nota.id === id ? { ...nota, favorito: !nota.favorito } : nota
      )
    );
  };

  return (
    <div className="app-container">
      <div className="formulario-nota">
        <FormularioNota agregarNota={agregarNota} />
      </div>
      <div className="cards-container">
        {" "}
        {/* Nuevo contenedor para las cards */}
        <div className="card">
          <h2>Todas las Notas</h2>
          <div className="table-container">
            <ListaNotas
              notas={notas}
              editarNota={editarNota}
              eliminarNota={eliminarNota}
              marcarFavorito={marcarFavorito}
            />
          </div>
        </div>
        <div className="card">
          <h2>Notas Favoritas</h2>
          <div className="table-container">
            <ListaNotas
              notas={notas.filter((nota) => nota.favorito)}
              editarNota={editarNota}
              eliminarNota={eliminarNota}
              marcarFavorito={marcarFavorito}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
