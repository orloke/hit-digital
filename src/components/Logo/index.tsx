import Image from 'next/image';
import logo from '../../../public/assets/logo.png';
import { Container } from './styles';

export function Logo() {
  return (
    <Container>
      <Image src={logo} />
    </Container>
  );
}
