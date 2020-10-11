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
    width: 95vw;
  }
  #Items {
    pointer-events: none;
    display: flex;
    text-align: center;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    align-items: center;
  }
  #Item {
    flex-direction: column;
    pointer-events: auto;
    z-index: 1;
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
    flex: none;
    overflow-x: auto;
    padding-right: 10px;
    padding-left: 10px;
    .startGameContainerText {
      border-radius: 10px;
      background-color: #6fa2b9;
      color: #fff;
      flex: none;
      p {
        font-size: 30px;
        font-weight: bolder;
        letter-spacing: 0.1rem;
      }
    }
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

  p {
    font-size: 30px;
    font-weight: bolder;
    letter-spacing: 0.1rem;
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
  /* The Modal (background) */

  #response {
    font-size: 15px;
  }
  /* Modal Content */
  .modal {
    display: none; /* Hidden by default */
    position: absolute; /* Stay in place */
    z-index: 9999; /* Sit on top */
    padding-top: 20px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
  }

  /* Add Animation */
  @-webkit-keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
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

  .modal-header-true {
    padding: 2px 16px;
    background-color: white;
    color: #5cb85c;
  }
  .modal-header-fake {
    padding: 2px 16px;
    background-color: white;
    color: #d35230;
  }
  .modal-body-true {
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
  }
  .modal-body-fake {
    padding: 2px 16px;
    background-color: #d35230;
    color: white;
  }
  .modal-footer {
    padding: 2px 16px;
    color: white;
  }
`;
