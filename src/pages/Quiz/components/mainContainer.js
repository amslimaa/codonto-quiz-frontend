/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from '../styles';

export default function MainContainer({ children }) {
  return (
    <Container>
      <div id="ItemsWrapper">
        <div id="Items">{children}</div>
      </div>
    </Container>
  );
}
