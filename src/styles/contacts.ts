import styled from 'styled-components';

export const Form = styled.form`
  width: 780px;
  height: 460px;
  display: flex;
  flex-direction: column;
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
    height: 90%;
    margin-bottom: 2rem;
  }

  textarea {
    width: 100%;
    height: 70%;
    margin-top: 2rem;
    padding: 0.7rem;
    border: none;
    border-radius: 5px;
    font-family: Roboto;
  }
  button {
    margin: auto;
    color: #ffff;
    margin-top: 1rem;
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
    border: none;
    border-radius: 5px;
  }
`;
