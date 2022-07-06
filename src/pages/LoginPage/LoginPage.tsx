import { FC } from 'react';
import { Wrapper, Container, GithubLoginButton } from './loginPageStyles';
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
        <h1>Welcome to your Search GitHub Users and Repositories APP!</h1>
        <button onClick={handleLogin}>
          <GithubLoginButton>
            Log in with GitHub
          </GithubLoginButton>
        </button>
      </Container>
    </Wrapper>
  );
};

export default LoginPage;
