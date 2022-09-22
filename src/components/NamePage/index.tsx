import Image from 'next/image';
import borderBottom from '../../../public/assets/borderBottom.png';
import { Container } from './styles';

export default function PageName() {
  return (
    <Container>
      <p>testando</p>
      <Image src={borderBottom} />
    </Container>
  );
}
