import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 780px;
  height: 435px;
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

  p {
    text-align: justify;
  }
`;

export const Partners = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: auto;
  @media (max-width: 768px) {
    row-gap: 3rem;
    margin-top: 2rem;
  }
`;
