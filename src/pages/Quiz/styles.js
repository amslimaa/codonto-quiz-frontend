import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  #ItemsWrapper {
    width: 100vw;
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
    margin-bottom: 45px;
    pointer-events: auto;
    width: 100vw;
    scroll-snap-align: start;
    flex: none;
    object-fit: cover;
    p {
      margin: 15px;
      font-size: 24px;
      font-weight: bolder;
    }
    #imgButtons {
      display: flex;
      justify-content: space-around;
    }
    #btn {
      width: 30%;
      height: 20%px;
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
  }
  #logo-img {
    width: 40%;
  }
  #item-img {
    width: 25%;
  }
  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 20px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  #response {
    font-size: 15px;
  }
  /* Modal Content */
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
  .close {
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .modal-header {
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
  }

  .modal-body {
    padding: 2px 16px;
  }

  .modal-footer {
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
  }
`;
