import React from 'react';
import LoginForm from 'components/auth/login';
import { useLogin } from 'hooks/auth/useLogin';

function LoginPage() {
  console.log('login hook called');
  const {
    email,
    password,
    checked,
    setEmail,
    setPassword,
    setChecked,
    handleSubmit,
  } = useLogin();

  console.log('After run component')
  return (
    <LoginForm
      email={email}
      password={password}
      checked={checked}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onCheckedChange={setChecked}
      onSubmit={handleSubmit}
    />
  );
}

export default LoginPage;
