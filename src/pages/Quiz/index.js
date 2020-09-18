import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import api from '../../services/api';
import btnIniciar from '../../assets/btnIniciar.png';
import logo from '../../assets/logo.png';
import btnFato from '../../assets/btnFato.png';
import btnFake from '../../assets/btnFake.png';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function loadQuestions() {
      const response = await api.get('/quiz');
      setQuestions(response.data);
    }
    loadQuestions();
  }, []);

  function handleStart() {
    const items = document.querySelector('#Items');
    items.scrollBy(300, 0);
  }

  function handleFato(q) {
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];
    document.getElementById('response').innerText = q.response;

    modal.style.display = 'block';
    span.onclick = function () {
      modal.style.display = 'none';
      const items = document.querySelector('#Items');
      items.scrollBy(300, 0);
    };
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  }
  function handleFake(q) {
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];
    document.getElementById('response').innerText = q.response;
    modal.style.display = 'block';
    span.onclick = function () {
      modal.style.display = 'none';
      const items = document.querySelector('#Items');
      items.scrollBy(300, 0);
    };
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  }
  return (
    <Container>
      <div id="ItemsWrapper">
        <div id="Items">
          <div id="Item">
            <img id="item-img" src={logo} alt="" />
            <p>
              O codonto quiz, eh um jogo de perguntas e resposta que visa a
              disseminacao de conteudos relacionados a odontologia e
              biosseguranca
            </p>
            <img
              id="btn"
              onClick={() => handleStart()}
              src={btnIniciar}
              alt=""
            />
            <div id="myModal" className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <span className="close">&times;</span>
                  <h2>Codonto Quiz Responde!!</h2>
                </div>
                <div className="modal-body">
                  <p id="response" />
                </div>
                <div className="modal-footer">
                  <h3>Saiba Mais!</h3>
                </div>
              </div>
            </div>
          </div>
          {questions.map((q) => (
            <div id="Item" key={q.id}>
              <img id="item-img" src={q.image.url} alt="" srcSet="" />
              <p>{q.question}</p>
              <img
                id="btn"
                src={btnFato}
                alt=""
                onClick={() => handleFato(q)}
              />
              <img
                id="btn"
                src={btnFake}
                alt=""
                onClick={() => handleFake(q)}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
