import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Container } from './styles';

import logoImage from '../../assets/logo.png';
import api from '../../services/api';

export default function Logon () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleLogon(e){
    e.preventDefault();
    try {
      const response = await api.post('/sessions', {  email,  password } );
      localStorage.setItem('token', response.data.token);
      history.push('/profile');
    } catch (err) {
      alert('Erro ao tentar logar');
    }
  }
  return (
    <Container>
      <div className="logon-container">
        <section className="form">
          <img src={logoImage}width={"350"} alt="Be The Hero"/>
          <form onSubmit={handleLogon} >
            <h1>ADM - Codonto Quiz</h1>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button className="button" type="submit" >Entrar</button>
            <Link className="back-link" to="/">
                <FiLogIn size={16} color="#fa991a"   />
                Voltar
            </Link>
          </form>
        </section>
      </div>

    </Container>
  );
}
