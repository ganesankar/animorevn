import { FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { AxiosError } from 'axios';
import type { UserLogin } from '~/types/auth';

import { useForm } from 'react-hook-form';
import { loginSchemaResolver } from '~/validations/auth';
import { useAppDispatch, useAppSelector, useSetDocumentTitle } from '~/hooks';
import api from '~/api';
import { startUpdate, updateSuccess, updateFail, clearError } from '~/store/reducers/user';

import { Link } from 'react-router-dom';
import { When } from 'react-if';
import Form from '~/components/Form';
import Title from '~/components/Title';
import Alert from '~/components/Alert';
import Input from '~/components/Input';
import Divider from '~/components/Divider';
import Button from '~/components/Button';
import Paragraph from '~/components/Paragraph';

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({ resolver: loginSchemaResolver });
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  useSetDocumentTitle('Log in');

  const handleLogin: SubmitHandler<UserLogin> = async (data) => {
    try {
      dispatch(startUpdate());
      const res = await api.login(data);
      dispatch(updateSuccess(res.data));
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(updateFail(error.response?.data));
      }
      dispatch(updateFail({ error: 'Error when login' }));
    }
  };

  return (
    <Form width='27rem' onSubmit={handleSubmit(handleLogin)}>
      <Title>Log in</Title>
      <When condition={user.error?.error}>
        <Alert
          className='mb-4'
          variant='error'
          title='Error !!!'
          closeButton
          onCloseButtonClick={() => dispatch(clearError())}
        >
          {user.error?.error}
        </Alert>
      </When>
      <Input
        label='Username'
        {...register('username')}
        error={!!errors.username}
        errorMessage={errors.username?.message}
      />
      <Input
        label='Password'
        type='password'
        {...register('password')}
        error={!!errors.password}
        errorMessage={errors.password?.message}
      />
      <Button disabled={user.isFetching} fullWidth>
        Log in
      </Button>
      <Divider label='or' />
      <Paragraph>
        Don't have an account? <Link to='/register'>Register</Link>
      </Paragraph>
    </Form>
  );
};

export default Login;
