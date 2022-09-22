import React, { ReactNode } from 'react';
import Header from '../Header';
import { Container } from './styles';

interface PropsLayout {
  children: ReactNode;
  currentPage: string;
}

export default function Layout({ children, currentPage }: PropsLayout) {
  return (
    <Container>
      <Header currentPage={currentPage} />
      {children}
    </Container>
  );
}
