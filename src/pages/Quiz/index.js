import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import imgQ01 from '../../assets/imgQ1.png';

import api from '../../services/api';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function loadQuestions() {
      const response = await api.get('/quiz');
      setQuestions(response.data);
    }
    loadQuestions();
  }, []);

  function handleFato(q) {
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];
    const response = document.getElementById('response');
    console.log(q);
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
          {questions.map((q) => (
            <div id="Item" key={q.id}>
              <img id="item-img" src={q.image.url} alt="" srcSet="" />
              <p>{q.question}</p>
              <button id="myBtnTrue" onClick={() => handleFato(q)}>
                Fato
              </button>
              <button id="myBtnFake" onClick={() => handleFake(q)}>
                Fake
              </button>
              <div id="myModal" className="modal">
                <div className="modal-content">
                  <div className="modal-header">
                    <span className="close">&times;</span>
                    <h2>Codonto Quiz Responde!!</h2>
                  </div>
                  <div className="modal-body">
                    <p id="response">{q.response}</p>
                  </div>
                  <div className="modal-footer">
                    <h3>Saiba Mais!</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
