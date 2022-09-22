import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
`;

export const DivButton = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  @media (max-width: 388px) {
    flex-direction: column;
    width: 100%;
    row-gap: 1rem;
  }
`;
