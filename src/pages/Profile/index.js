import React from 'react'
import {   Redirect } from 'react-router-dom'
import { isAutenticated } from '../../services/auth';

import { Container } from './styles';


function Profile() {
  const token = localStorage.getItem('token');

  return  isAutenticated(token) ? (
    <Container><h1>Profile</h1></Container>
    ) : (
     <Redirect to={{ pathname: '/logon'} }  />
    )
}
export default Profile;
