import styled from 'styled-components';

export const Container = styled.div`
button {
    cursor: pointer;
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
.button {
    width: 100%;
    height: 60px;
    background: #fa991a;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
}
.button:hover {
    filter: brightness(90%);
}

.back-link {
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 14px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
}
.back-link svg {
  margin-right: 8px;
}
.back-link:hover{
  opacity: 0.8;
}

.logon-container{
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logon-container section.form {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
}

.logon-container section.form form {
    margin-top: 100px;
}
.logon-container section.form form h1 {
    font-size: 32px;
    margin-bottom: 32px;
}

`;
