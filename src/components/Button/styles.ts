import styled from 'styled-components';

export const Content = styled.button`
  background: linear-gradient(
    0deg,
    rgba(235, 92, 32, 1) 0%,
    rgba(250, 139, 92, 0.9133403361344538) 100%
  );

  color: #ffffff;
  min-width: 10rem;
  border: none;
  border-radius: 10px;
  padding: 0.7rem 1.1rem;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;
