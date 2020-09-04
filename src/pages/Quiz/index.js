import React from 'react';
import { Container } from './styles';


import imgQ01 from '../../assets/imgQ1.png';

export default function Quiz() {
  const questions = {
    q1: {
      texto:
        'O atendimento eletivo de idosos e/ou portadores de doenças crônicas deve ser feito apenas na fase de desaceleração da epidemia.',
      resposta:
        'Segundo recomendações do CRO-PI o ideal é acompanhar os dados epidemiológicos e apenas remarcar esses pacientes na fase de desaceleração (diminuição acentuada dos casos ativos no país) da epidemia.',
      fake: true,
    },
    q2: {
      texto:
        'Antes dos procedimentos os pacientes devem realizar bochecho com peróxido de hidrogênio de 1,0% a 1,5% para diminuir a carga viral.',
      resposta:
        'Não existem evidências científicas que comprovem que o bochecho com peróxido de hidrogênio antes dos atendimentos seja eficaz para redução de carga viral ou microbiana. O CRO-SP recomenda o uso de digluconato de clorexidina a 0,12%, por esse ter efeito antimicrobiano comprovado.',
      fake: true,
    },
    q3: {
      texto:
        'O SARS-CoV-2 pode permanecer por até 24 dias na saliva de uma pessoa contaminada.',
      resposta:
        'Um estudo realizado na China por De Chang et al., observou a presença do vírus na saliva de alguns pacientes após 24 dias do início dos sintomas. Esse fato confirma a importância das medidas de biossegurança para o atendimento de todos os pacientes.',
      fake: false,
    },
    q4: {
      texto:
        'O uso de sugadores de alta potência e isolamento absoluto são recomendações para redução da dispersão de gotículas salivares e de aerossóis contendo saliva.',
      resposta:
        'A CDC recomenda o uso de sugadores de alta potência e isolamento absoluto (quando possível) durante os procedimentos para diminuir a dispersão de gotículas de saliva e aerossóis contendo saliva, reduzindo assim os riscos de contaminação do ambiente.',
      fake: false,
    },
  };
  function nextQuestion() {
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
          <div id="Item">
            <img id="item-img" src={imgQ01} alt="" srcSet="" />
            <p>{questions.q1.texto}</p>
            <button id="myBtn" onClick={nextQuestion}>
              Fato
            </button>
            <button id="myBtn" onClick={nextQuestion}>
              Fake
            </button>
            <div id="myModal" className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <span className="close">&times;</span>
                  <h2>Codonto Quiz Responde!!</h2>
                </div>
                <div className="modal-body">
                  <p>{questions.q1.resposta}</p>
                </div>
                <div className="modal-footer">
                  <h3>Saiba Mais!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
