import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Wrapper, Container } from './loginPageStyles';
import { GithubLoginButton } from 'react-social-login-buttons';
import firebase from 'firebase/compat/app';
import 'firebase/auth';

export interface ILoginPageProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: React.FC<ILoginPageProps> = ({ setIsAuthenticated }) => {
  let navigate = useNavigate()
  

  // const signInWithGithub = async () => {
  //   const GithubProvider = new firebase.auth.GithubAuthProvider();
  //   await firebase.auth().signInWithPopup( GithubProvider );
  //   setIsAuthenticated( true );
  //   navigate( '/', { replace: true } );
  //   console.log('hi');
  // };

  return (
    <Wrapper>
      <Container>
        <h1>Welcome to your Search GitHub Users and Reposotories APP!</h1>
        <GithubLoginButton  align='center' />
      </Container>
    </Wrapper>
  );
};

export default LoginPage;
