import { Logo } from '../components/Logo';
import { PageName } from '../components/NamePage';
import { Container } from '../styles/home';

export default function Home() {
  return (
    <Container>
      <Logo />
      <PageName text="Introdução" />
    </Container>
  );
}
