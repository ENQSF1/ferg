import React from "react";

export default function Tarjet({ titulo, parrafo, boton }) {
  return (
    <div className="w-80 mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex items-center justify-center flex-col my-6">
      <img
        className="w-full h-48 object-cover"
        src="./images/logo.jpg"
        alt="Imagen de la tarjeta"
      />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          {titulo}
        </h2>
        <p className="mt-2 text-gray-600">{parrafo}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          {boton}
        </button>
      </div>
    </div>
  );
}
