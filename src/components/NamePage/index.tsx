import Image from 'next/image';
import borderBottom from '../../../public/assets/borderBottom.png';
import { Container } from './styles';

interface PageNameProps {
  text: string;
}

export function PageName({ text }: PageNameProps) {
  return (
    <Container>
      <p>{text}</p>
      <Image src={borderBottom} />
    </Container>
  );
}
