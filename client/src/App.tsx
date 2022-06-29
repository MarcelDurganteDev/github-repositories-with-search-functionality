import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { ProtectedRoute } from './hooks/ProtectedRoute';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RepositoriesPage from './pages/RepositoriesPage/RepositoriesPage';
import { UserProvider } from './store/providers/UserProvider';

export interface IApplicationProps {}

const App: FC<IApplicationProps> = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<ProfilePage />} />
          <Route path='/:username' element={<ProfilePage />} />
          <Route path='/:username/:reponame' element={<RepositoriesPage/>} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
