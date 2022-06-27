import React from 'react'
import { Wrapper, Container } from './loginStyles';

const Login = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Welcome to your Search GitHub Users and Reposotories APP!</h1>
        <button>Login with your GitHub</button>
      </Container>
    </Wrapper>
  );
}

export default Login