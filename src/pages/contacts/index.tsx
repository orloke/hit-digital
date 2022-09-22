import Image from 'next/image';
import { useFormik } from 'formik';
import Layout from '../../components/Layout';
import contact from '../../../public/assets/contact.jpg';
import { Container, DivImage, Form, Info } from '../../styles/contacts';

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      mensagem: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <Layout currentPage="Contato">
      <Container>
        <DivImage>
          <Image layout="fill" src={contact} />
        </DivImage>
        <Form onSubmit={formik.handleSubmit}>
          <Info className="info">
            <input
              type="text"
              placeholder="Nome*"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <input
              type="email"
              placeholder="E-mail*"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Info>
          <textarea
            name="mensagem"
            placeholder="Mensagem*"
            value={formik.values.mensagem}
            onChange={formik.handleChange}
          />
          <button type="submit"> ENVIAR </button>
        </Form>
      </Container>
    </Layout>
  );
}
