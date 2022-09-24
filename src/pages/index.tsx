import Image from 'next/image';
import Layout from '../components/Layout';
import hogarth from '../../public/assets/hogarth.png';
import squadra from '../../public/assets/squadra.png';
import wpp from '../../public/assets/wpp.png';
import brivia from '../../public/assets/brivia.png';
import just from '../../public/assets/just.png';
import { Partners, Main } from '../styles/home';

export default function Home() {
  return (
    <Layout currentPage="Introdução">
      <Main>
        <p>
          Somos uma produtora digital que desenvolve tecnologia e viabiliza
          outsourcing de equipes de alto padrão, preparadas para atuar em
          projetos de marcas globais. Veja alguns de nossos parceiros:
        </p>
        <Partners>
          <Image src={hogarth} />
          <Image src={squadra} />
          <Image src={wpp} />
          <Image src={brivia} />
          <Image src={just} />
        </Partners>
      </Main>
    </Layout>
  );
}
