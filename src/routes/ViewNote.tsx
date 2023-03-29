import React from "react";
import { useParams } from "react-router-dom";

const ViewNote = () => {
  const params = useParams();
  return (
    <div>
      <h1>Sou a página de visualização do Note</h1>
      <p>Meu id é: {params.id}</p>
    </div>
  );
};

export { ViewNote };
