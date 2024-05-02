import React from "react";

function BotonPdf(parametro) {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#4CAF50",
          border: "none",
          color: "white",
          padding: "10px 20px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
      >
        {parametro ? "Descargar en PDF" : "Generando PDF..."}
      </button>
    </div>
  );
}

export default BotonPdf;
