import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '../hooks/ProtectedRoute';
import GlobalStyles from '../styles/GlobalStyles';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RepositoriesList from '../components/RepositoriesList/RepositoriesList';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='' element={<ProfilePage />} />
          <Route path='/:username' element={<RepositoriesList />} />
          <Route path='/:username/:reponame' element={<RepositoriesList />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
};
