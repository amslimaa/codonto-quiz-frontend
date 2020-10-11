/* eslint-disable react/prop-types */
import React from 'react';
import swal from '@sweetalert/with-react';
import btnFato from '../../../assets/btnFato.png';
import btnFake from '../../../assets/btnFake.png';
import btnNext from '../../../assets/btnNext.png';
import api from '../../../services/api';

async function Vote(id, isFake) {
  await api.put('/quiz', {
    id,
    fake: isFake,
  });
}

export default function CurrentElement({ question, handleNext, HandleHit }) {
  function handleAnswer(isFake) {
    if (question.fake === isFake) {
      HandleHit();
      Vote(question.id, isFake);
      swal({
        icon: 'success',
        buttons: {},
        content: (
          <div>
            <p className="questionAnswer">{question.response}</p>
            <input
              id="btnNext"
              type="image"
              src={btnNext}
              onClick={() => {
                handleNext(swal);
              }}
              alt="Proxima"
            />
          </div>
        ),
      });
    } else {
      Vote(question.id, isFake);
      swal({
        icon: 'error',
        buttons: {},
        content: (
          <div>
            <p className="questionAnswer">{question.response}</p>
            <input
              id="btnNext"
              type="image"
              src={btnNext}
              onClick={() => {
                handleNext(swal);
              }}
              alt="Proxima"
            />
          </div>
        ),
      });
    }
  }

  return (
    <>
      <div id="Item">
        <img id="item-img" src={question.image.url} alt="" srcSet="" />
        <div className="startGameContainerText">
          <p>{question.question}</p>
        </div>
        <div id="imgButtons">
          <input
            id="btn"
            type="image"
            src={btnFato}
            alt="Fato"
            onClick={() => handleAnswer(false)}
          />
          <input
            id="btn"
            src={btnFake}
            type="image"
            alt=""
            onClick={() => handleAnswer(true)}
          />
        </div>
      </div>
    </>
  );
}
