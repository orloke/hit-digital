import React from 'react';
import { Button } from '../Button';
import { Logo } from '../Logo';
import { PageName } from '../NamePage';
import { Container, DivButton } from './styles';

interface PropsHeader {
  currentPage: string;
}

export default function Header({ currentPage }: PropsHeader) {
  return (
    <Container>
      <Logo />
      <DivButton>
        <Button>INTRODUÇÃO</Button>
        <Button>CONTATO</Button>
      </DivButton>
      <PageName>{currentPage}</PageName>
    </Container>
  );
}
