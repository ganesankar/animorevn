import type { FC } from 'react';

import { useSetDocumentTitle } from '~/hooks';

import { Link } from 'react-router-dom';
import Form from '~/components/Form';
import Title from '~/components/Title';
import Input from '~/components/Input';
import Divider from '~/components/Divider';
import Button from '~/components/Button';
import Paragraph from '~/components/Paragraph';

const Login: FC = () => {
  useSetDocumentTitle('Log in');

  return (
    <Form width='27rem'>
      <Title>Log in</Title>
      <Input label='Username' />
      <Input label='Password' type='password' />
      <Button fullWidth>Log in</Button>
      <Divider label='or' />
      <Paragraph>
        Don't have an account? <Link to='/register'>Register</Link>
      </Paragraph>
    </Form>
  );
};

export default Login;
