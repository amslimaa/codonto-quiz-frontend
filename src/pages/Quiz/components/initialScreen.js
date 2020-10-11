import React from 'react';
import btnIniciar from '../../../assets/btnIniciar.png';
import logo from '../../../assets/logo.png';

export default function InitialScreen({ handleNext }) {
  return (
    <div id="Item">
      <img id="logo-img" src={logo} alt="" />
      <p className="startQuestion">
        Você sabe o que mudou nas medidas de biossegurança durante a pandemia de
        COVID-19?
      </p>
      <div className="startGameContainerText">
        <p>
          Teste seus conhecimentos com o Codonto Quiz, um jogo de perguntas e
          respostas que tem como intuito a divulgação de conteúdos relacionados
          a Biossegurança em procedimentos odontológicos.
        </p>
      </div>
      <div id="imgButtons">
        <input
          id="btn"
          type="image"
          src={btnIniciar}
          onClick={() => {
            handleNext();
          }}
          alt="Iniciar o Quiz"
        />
      </div>
    </div>
  );
}
