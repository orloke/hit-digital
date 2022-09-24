import { useRouter } from 'next/router';
import React from 'react';
import { Button } from '../Button';
import { Logo } from '../Logo';
import { PageName } from '../NamePage';
import { Container, DivButton } from './styles';

interface PropsHeader {
  currentPage: string;
}

export default function Header({ currentPage }: PropsHeader) {
  const router = useRouter();
  return (
    <Container>
      <Logo />
      <DivButton>
        <Button active={router.pathname === '/'} href="/">
          INTRODUÇÃO
        </Button>
        <Button active={router.pathname === '/contacts'} href="/contacts">
          CONTATO
        </Button>
      </DivButton>
      <PageName>{currentPage}</PageName>
    </Container>
  );
}
