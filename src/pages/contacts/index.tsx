import Layout from '../../components/Layout';
import { Form, Info } from '../../styles/contacts';

export default function Contact() {
  return (
    <Layout currentPage="Contato">
      <Form>
        <Info className="info">
          <input type="text" placeholder="Nome*" />
          <input type="email" placeholder="E-mail*" />
        </Info>
        <textarea name="mensagem" placeholder="Mensagem*" />
        <button type="submit"> ENVIAR </button>
      </Form>
    </Layout>
  );
}
