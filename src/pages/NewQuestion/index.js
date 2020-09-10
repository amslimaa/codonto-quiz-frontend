import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi'

import logoImage from '../../assets/newQuestions.svg'

import api from '../../services/api';
import { Container } from './styles';

export default function NewQuestion() {
  const history = useHistory();
  const token = localStorage.getItem('token');
  const bearerToken = ` Bearer ${token}`
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')
  const [fake, setFake] = useState(false)
  const [active, setActive] = useState(false)

  async function handleRegisterIncident(e){
    e.preventDefault();
    const data = {
      question,
      response,
      fake,
      active,
      image_id: 4,
    }
    try {
      await api.post('/questions', data, {
        headers: {
          Authorization: bearerToken,
        }
      });
      history.push('/profile');
    } catch (err) {
      alert('Não foi possivel cadastrar a questao, tente novamente ');
    }

  }
  return (
    <Container>
       <div className="new-incident-container">
        <div className="content">
          <section>
            <img src={logoImage} alt="Be The Hero"width="430px"/>
            <h1>Cadastro nova questao</h1>
            <p>Crie questoes bem elaboradas para melhor entendimento dos jogadores</p>
            <Link className="back-link" to="/">
              <FiArrowLeft size={16} color="#E02041"   />
              Voltar à home
            </Link>
          </section>
          <form onSubmit={handleRegisterIncident}>
            <textarea
              placeholder="Texto da questao"
              value={question}
              onChange={e => setQuestion(e.target.value)}
            />
            <textarea
              placeholder="Resposta"
              value={response}
              onChange={e => setResponse(e.target.value)}
            />

            <input type="text" list="fake"  placeholder="Fake" onChange={e => setFake(e.target.value)} />
            <datalist id="fake">
              <option value={true} />
              <option value={false} />
            </datalist>

            <input type="text" list="ativo"  placeholder="Ativo" onChange={e => setActive(e.target.value)}/>
            <datalist id="ativo">
              <option value={true} />
              <option value={false} />
            </datalist>
            <button  className="button" type="submit" >Cadastrar</button>
          </form>
        </div>
      </div>
    </Container>
  );
}
