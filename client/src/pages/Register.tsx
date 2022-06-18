import type { FC } from 'react';

import { useSetDocumentTitle } from '~/hooks';

import { Link } from 'react-router-dom';
import Form from '~/components/Form';
import Title from '~/components/Title';
import Input from '~/components/Input';
import Divider from '~/components/Divider';
import Button from '~/components/Button';
import Paragraph from '~/components/Paragraph';

const Register: FC = () => {
  useSetDocumentTitle('Register');

  return (
    <Form width='27rem'>
      <Title color='black'>Regsiter</Title>
      <Input label='Username' />
      <Input label='Password' type='password' />
      <Input label='Confirm password' type='password' />
      <Button fullWidth>Register</Button>
      <Divider label='or' />
      <Paragraph>
        Have an account? <Link to='/login'>Log in</Link>
      </Paragraph>
    </Form>
  );
};

export default Register;
