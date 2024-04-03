import React from "react";

function ListaNotas({ notas, eliminarNota, marcarFavorito }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre de la Tarea</th>
          <th>Contenido de la Tarea</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {notas.map((nota) => (
          <tr key={nota.id}>
            <td data-label="Nombre de la Tarea">{nota.titulo}</td>
            <td data-label="Contenido de la Tarea">{nota.contenido}</td>
            <td data-label="Acciones">
              <button onClick={() => marcarFavorito(nota.id)}>
                {nota.favorito ? "Quitar Favorito" : "Marcar Favorito"}
              </button>
              <button onClick={() => eliminarNota(nota.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaNotas;
