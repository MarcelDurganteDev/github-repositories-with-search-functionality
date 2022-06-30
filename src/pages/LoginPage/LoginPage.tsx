import { FC } from 'react';
import { Wrapper, Container } from './loginPageStyles';
import { GithubLoginButton } from 'react-social-login-buttons';
import { useNavigate } from 'react-router-dom';

const LoginPage: FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    console.log( 'hi 1');
    
    e.preventDefault();
   localStorage.removeItem('isLoggedIn');
    localStorage.setItem( 'isLoggedIn', 'true' );
    navigate('/');
    }
  

  return (
    <Wrapper>
      <Container>
        <h1>Welcome to your Search GitHub Users and Reposotories APP!</h1>
        <button onClick={handleLogin}>
          <GithubLoginButton align='center' />
        </button>
      </Container>
    </Wrapper>
  );
};

export default LoginPage;
