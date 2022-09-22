import Image from 'next/image';
import { ReactNode } from 'react';
import borderBottom from '../../../public/assets/borderBottom.png';
import { Container } from './styles';

interface PageNameProps {
  children: ReactNode;
}

export function PageName({ children }: PageNameProps) {
  return (
    <Container>
      <p>{children}</p>
      <Image src={borderBottom} />
    </Container>
  );
}
