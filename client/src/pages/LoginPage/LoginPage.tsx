import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { Wrapper, Container } from './loginPageStyles';

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = props => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider()).then(response => {
      console.log(response.user.uid);
      setAuthing(false);
      navigate('/profile');
    } )
      .catch( error => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <Wrapper>
      <Container>
        <h1>Welcome to your Search GitHub Users and Reposotories APP!</h1>
        <button onClick={()=> signInWithGoogle()} disabled={authing}>Login with your GitHub</button>
      </Container>
    </Wrapper>
  );
};

export default LoginPage;
