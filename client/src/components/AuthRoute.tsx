import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export interface IAuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<IAuthRouteProps> = props => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, user => {
    if (user) {
      setLoading(false);
    } else {
      console.log( 'not logged in/unauthorized' );
      navigate('/');
    }
  } );
  
  if ( loading ) {
    return <p>Loading...</p>;
  }

  return <div>{ children }</div>;
};

export default AuthRoute;
