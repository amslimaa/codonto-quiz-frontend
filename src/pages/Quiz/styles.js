import styled from 'styled-components';
import '../../styles/fonts.css';

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  #ItemsWrapper {
    //width: 95vw;
    padding: 50px;
  }


  #Items {
    display: flex;
    text-align: center;
    align-items: center;
  }
  .startGameContainerText {
    border-radius: 10px;
    background-color: #6fa2b9;
    color: #fff;
    p {
      font-size: 30px;
      font-weight: bolder;
      letter-spacing: 0.1rem;
    }
  }
  #Item {
    flex-direction: row;
    width: 100%;
    height: 100%;
    z-index: 1;
    p {
      font-size: 30px;
      font-weight: bolder;
      letter-spacing: 0.1rem;
    }
    .startQuestion {
      margin-top: 20px;
      margin-bottom: 20px;
      color: #fa991a;
      font-family: 'Bebas Neue', cursive;
    }
    #imgButtons {
      object-fit: cover;
      display: flex;
      justify-content: space-around;
    }
  }

  #btn {
    width: 30%;
    height: 20%;
    background: #e7f1f2;
    border-radius: 100px;
    color: #fff;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
  }

  #btn:hover {
    filter: brightness(90%);
  }
  #btnStart {
    background-color: #e7f1f2;
  }

  @media (max-width: 630px) {
    #ItemsWrapper {
    //width: 95vw;
    padding: 20px;
  }

    #btn {
      width: 40%;
      height: 20%;
    }
    #Item {
      .textResponse {
        font-size: 16px;
      }
      .startGameContainerText {
        p {
          padding: 15px;
          font-size: 15px;
        }
      }
      .startQuestion {
        font-size: 15px;
      }
      #item-img {
        width: 60%;
      }
      #logo-img {
        width: 70%;
      }
    }
  }
  #logo-img {
    width: 55%;
  }
  #item-img {
    width: 25%;
  }

  #response {
    font-size: 15px;
  }

  /* The Close Button */
  .next {
    color: white;
    font-size: 28px;
    font-weight: bold;
  }

  .next:hover,
  .next:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
