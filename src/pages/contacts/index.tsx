import Head from 'next/head';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';
import contact from '../../../public/assets/contact.jpg';
import {
  Container,
  DivImage,
  DivInputs,
  Form,
  Info,
} from '../../styles/contacts';

const validationSchema = Yup.object({
  username: Yup.string().required('Escreva seu nome!'),
  email: Yup.string().email().required('Escreva seu email'),
  mensagem: Yup.string().required('Escreva sua mensagem'),
});

export default function Contact() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      mensagem: '',
    },
    validationSchema,
    onSubmit: () => {
      toast.success(`Mensagem enviada! 👌`);
      router.push('/');
    },
  });
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>
      <Layout currentPage="Contato">
        <Container>
          <DivImage>
            <Image priority layout="fill" src={contact} />
          </DivImage>
          <Form onSubmit={formik.handleSubmit}>
            <Info>
              <DivInputs>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Nome*"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
                <span className="errors">{formik.errors.username}</span>
              </DivInputs>
              <DivInputs>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail*"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <span className="errors">{formik.errors.email}</span>
              </DivInputs>
            </Info>
            <DivInputs marginTop={2}>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Mensagem*"
                value={formik.values.mensagem}
                onChange={formik.handleChange}
              />
              <span className="errors">{formik.errors.mensagem}</span>
            </DivInputs>
            <button type="submit"> ENVIAR </button>
          </Form>
        </Container>
      </Layout>
    </>
  );
}
