import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import MainContainer from './components/mainContainer';
import InitialScreen from './components/initialScreen';
import LastScreen from './components/lastScreen';
import CurrentElement from './components/element';

// import btnIniciar from '../../assets/btnIniciar.png';
// import JogarNovamente from '../../assets/JogarNovamente.png';
// import logo from '../../assets/logo.png';
// import btnFato from '../../assets/btnFato.png';
// import btnFake from '../../assets/btnFake.png';
// import btnNext from '../../assets/btnNext.png';
import api from '../../services/api';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(-1);
  const [hit, setHit] = useState(0);

  useEffect(() => {
    async function loadQuestions() {
      const response = await api.get('/quiz');
      setQuestions(response.data);
    }
    loadQuestions();
  }, []);

  function handleNext(swal) {
    setIndex(index + 1);
    if (swal) {
      swal.close();
    }
  }

  function HandleHit() {
    setHit(hit + 1);
  }

  function restartQuiz() {
    setIndex(-1);
    setHit(0);
  }

  return (
    <div>
      {questions.length > 0 && index < 0 && (
        <MainContainer handleNext={setIndex}>
          <InitialScreen handleNext={handleNext} />
        </MainContainer>
      )}
      {questions.length > 0 && index >= 0 && index <= 9 && (
        <MainContainer handleNext={setIndex}>
          <CurrentElement
            question={questions[index]}
            handleNext={handleNext}
            HandleHit={HandleHit}
          />
        </MainContainer>
      )}
      {questions.length > 0 && index === 10 && (
        <MainContainer handleNext={setIndex}>
          <LastScreen restartQuiz={restartQuiz} hit={hit} />
        </MainContainer>
      )}
    </div>
  );
}
