import styled from 'styled-components';

export const Container = styled.div`
*{
  margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
html, body, #root {
    display: grid;
    place-items: center;
    height: 100vh;
  }
  body, input, button {
    color: #333;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif
  }
  button {
      width: 87%;
      height: 20%px;
      background: #fa991a;
      border: 0;
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      margin-top: 16px;
      margin-left: 30px;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      font-size: 18px;
      line-height: 60px;
    }
    button:hover {
      filter: brightness(90%);
    }
  }
  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
}
form textarea {
  width: 100%;
  min-height: 140px;
  resize: vertical;

  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
}
  .new-incident-container{
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

.new-incident-container .content {
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.new-incident-container .content section {
  width: 100%;
  max-width: 380px;
}

.new-incident-container .content section h1{
  margin: 64px 0 32px;
  font-size: 32px;
}
.new-incident-container .content section p {
  font-size: 18px;
  color: #737380;
  line-height: 32px;
}
.new-incident-container .content form {
  width: 100%;
  max-width: 450px;
}
.new-incident-container .content form input,
.new-incident-container .content form textarea {
  margin-top: 8px;
} `;
