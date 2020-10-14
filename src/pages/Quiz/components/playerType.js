/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import logo from '../../../assets/logo.png';

import api from '../../../services/api';

export default function PlayerType({ handleNext }) {
  async function Vote(id) {
    await api.put('/playerstype', {
      id,
    });
    handleNext();
  }
  return (
    <div id="Item">
      <img id="logo-img" src={logo} alt="" />
      <div className="startGameContainerText">
        <p>Qual sua área de atuação profissional ?</p>
      </div>
      <div id="imgButtonsPlayers">
        <button
          id="btn"
          onClick={() => {
            Vote(1);
          }}
        >
          Odonto
        </button>
        <button
          id="btn"
          onClick={() => {
            Vote(2);
          }}
        >
          Demais áreas da saúde
        </button>
        <button
          id="btn"
          onClick={() => {
            Vote(3);
          }}
        >
          Outros
        </button>
      </div>
    </div>
  );
}
