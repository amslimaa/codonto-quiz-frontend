import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import api from '../../services/api';
import btnIniciar from '../../assets/btnIniciar.png';
import JogarNovamente from '../../assets/JogarNovamente.png';
import logo from '../../assets/logo.png';
import btnFato from '../../assets/btnFato.png';
import btnFake from '../../assets/btnFake.png';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [hits, setHits] = useState(0);

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
    if (q.fake === false) setHits(hits + 1);

    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('next')[0];
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
    if (q.fake === true) setHits(hits + 1);

    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('next')[0];
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
  function handleRestart() {
    const items = document.querySelector('#Items');
    items.scrollBy(-20000, 0);
    setHits(0);
  }
  return (
    <Container>
      <div id="ItemsWrapper">
        <div id="Items">
          <div id="Item">
            <img id="logo-img" src={logo} alt="" />
            <p>
              Você sabe o que mudou nas medidas de biossegurança durante a
              pandemia de COVID-19? Teste seus conhecimentos com o Codonto Quiz,
              um jogo de perguntas e respostas que tem como intuito a divulgação
              de conteúdos relacionados com Biossegurança em procedimentos
              odontológicos.
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
                  <h2>Codonto Quiz Responde!!</h2>
                </div>
                <div className="modal-body">
                  <p id="response" />
                </div>
                <div className="modal-footer">
                  <span className="next">Entendido!</span>
                </div>
              </div>
            </div>
          </div>
          {questions.map((q) => (
            <div id="Item" key={q.id}>
              <img id="item-img" src={q.image.url} alt="" srcSet="" />
              <p>{q.question}</p>
              <div id="imgButtons">
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
            </div>
          ))}
          <div id="Item">
            <img id="item-img" src={logo} alt="" />
            <p>
              Parabens Você acertou {hits} / {questions.length} questoes!
            </p>
            <img
              id="btn"
              onClick={() => handleRestart()}
              src={JogarNovamente}
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
