import styled from 'styled-components';

export const Container = styled.div`
  width: 780px;
  height: 465px;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    0deg,
    rgba(235, 92, 32, 1) 0%,
    rgba(250, 139, 92, 0.9133403361344538) 100%
  );
  color: #ffff;
  padding: 2rem;
  font-size: 1.2rem;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 2rem;
  }
`;

export const DivImage = styled.div`
  position: relative;
  width: 30%;
  @media (max-width: 768px) {
    display: none;
  }
  img {
    border-radius: 10px;
    border: #fc520a solid 1px !important;
  }
`;

export const Form = styled.form`
  width: 65%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
  textarea {
    width: 100%;
    height: 65%;
    margin-top: 2rem;
    padding: 0.7rem;
    border: #fc520a solid 1px;
    border-radius: 5px;
    font-family: Roboto;
    &:focus-visible {
      outline: none;
    }
  }
  button {
    margin: auto;
    margin-bottom: 0;
    color: #ffff;
    padding: 0.7rem;
    border: none;
    border-radius: 5px;
    background-color: #373735;
    font-weight: bold;
    min-width: 10rem;
    &:hover {
      background-color: #2c2c2a;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 48%;
    padding: 0.7rem;
    border: #fc520a solid 1px;
    border-radius: 5px;
    &:focus-visible {
      outline: none;
    }
  }
`;
