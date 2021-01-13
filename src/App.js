import React, { useState } from "react";
import "./styles.css";

export default function App() {
  //ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");

  //Palpite
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };
  //0<>300
  //palpites que máquina deu
  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar!</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numPalpites} chutes!{" "}
        </p>
        <button onClick={iniciarJogo}>Iniciar novamente!</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <p>
        Min: {min} / Max: {max}
      </p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}
