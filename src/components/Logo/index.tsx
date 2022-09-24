import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/assets/logo.png';
import { Container } from './styles';

export function Logo() {
  return (
    <Container>
      <Link href="/" passHref>
        <span>
          <Image src={logo} />
        </span>
      </Link>
    </Container>
  );
}
