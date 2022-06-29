import { FC } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Wrapper, Container } from './loginPageStyles';
import { GithubLoginButton } from 'react-social-login-buttons';

const LoginPage: FC = () => {

  // const navigate = useNavigate();

  // const handleLogin = () => {
    
  //   performLogin();
  //   navigate('/');

  // }

  return (
    <Wrapper>
      <Container>
        <h1>Welcome to your Search GitHub Users and Reposotories APP!</h1>
        <button>
          <GithubLoginButton align='center' />
        </button>
      </Container>
    </Wrapper>
  );
};

export default LoginPage;
