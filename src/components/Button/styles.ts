import styled from 'styled-components';

interface PropsContent {
  active: boolean;
}

export const Content = styled.button<PropsContent>`
  background: ${props =>
    props.active
      ? 'rgb(250 74 0) '
      : `linear-gradient(
        0deg,
        rgba(235, 92, 32, 1) 0%,
        rgba(250, 139, 92, 0.9133403361344538) 100%
      )`};

  color: #ffffff;
  font-weight: bold;
  min-width: 10rem;
  border: none;
  border-radius: 10px;
  padding: 0.7rem 1.1rem;
  transition: filter 0.2s ease-in-out;
  &:hover {
    filter: brightness(0.8);
  }
`;
