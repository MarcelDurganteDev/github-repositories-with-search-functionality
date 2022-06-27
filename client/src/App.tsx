import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Footer from './components/Footer/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
import Profile from './pages/Profile/Profile';
import RepositoriesList from './components/RepositoriesList/RepositoriesList';
import AuthRoute from './components/AuthRoute';

import { initializeApp } from 'firebase/app';
import { config } from './config/config';

initializeApp(config.firebaseConfig);

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route
          path='/profile'
          element={
            <AuthRoute>
              <Profile />
            </AuthRoute>
          }
        />
        <Route
          path='/:username'
          element={
            <AuthRoute>
              <Profile />
            </AuthRoute>
          }
        />
        <Route path='/:username/:reponame' element={ <AuthRoute>
              <RepositoriesList />
            </AuthRoute>} />
      </Routes>
      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
