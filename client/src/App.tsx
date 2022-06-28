import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RepositoriesList from './components/RepositoriesList/RepositoriesList';

// import firebase from 'firebase/compat/app';
// import { auth, provider } from './config/config';
// import AuthRoute from './components/AuthRoute';

export interface IApplicationProps {}

const App: React.FC<IApplicationProps> = ()=> {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <ProtectedRoute path='/' isAuthenticated={isAuthenticated} element={ <ProfilePage/> } />
        {/* <Route path='/' element={<ProfilePage />} /> */}
        <Route path='/:username' element={<RepositoriesList />} />
        <Route path='/:username/:reponame' element={<RepositoriesList />} />
        <Route path='/login' element={ <LoginPage setIsAuthenticated={setIsAuthenticated}/> } />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
