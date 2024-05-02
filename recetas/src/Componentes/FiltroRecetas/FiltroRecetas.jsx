import React from "react";

const FiltroRecetas = ({ filtro, onFiltroChange }) => {
  return (
    <input
      className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      type="text"
      placeholder="Buscar receta..."
      value={filtro}
      onChange={onFiltroChange}
    />
  );
};

export default FiltroRecetas;
