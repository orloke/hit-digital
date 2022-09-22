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
        <Button href="/">INTRODUÇÃO</Button>
        <Button href="/contacts">CONTATO</Button>
      </DivButton>
      <PageName>{currentPage}</PageName>
    </Container>
  );
}
