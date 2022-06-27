import React from 'react'
import { Wrapper, Container } from './loginPageStyles';

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  return (
    <Wrapper>
      <Container>
        <h1>Welcome to your Search GitHub Users and Reposotories APP!</h1>
        <button>Login with your GitHub</button>
      </Container>
    </Wrapper>
  );
}

export default LoginPage