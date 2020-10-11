import React from 'react';
import JogarNovamente from '../../../assets/JogarNovamente.png';
import logo from '../../../assets/logo.png';

export default function LastScreen({ hit, restartQuiz }) {
  return (
    <div id="Item">
      <img id="logo-img" src={logo} alt="" />
      <p>Parabéns você acertou {hit} / 10 questões.</p>
      <input
        id="btn"
        type="image"
        onClick={() => {
          restartQuiz();
        }}
        src={JogarNovamente}
        alt=""
      />
    </div>
  );
}
