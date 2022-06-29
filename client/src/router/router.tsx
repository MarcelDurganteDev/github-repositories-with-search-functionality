import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import { UserProvider } from '../store/providers/UserProvider';
import { ProtectedRoute } from '../hooks/ProtectedRoute';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RepositoriesPage from '../pages/RepositoriesPage/RepositoriesPage'

export const Router: FC = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/login' element={<LoginPage />} />
    //     <Route path='/' element={<ProtectedRoute />}>
    //       <Route path='' element={<ProfilePage />} />
    //       <Route path='/:username' element={<RepositoriesPage/>} />
    //       <Route path='/:username/:reponame' element={<RepositoriesPage/>} />
    //     </Route>
    //   </Routes>
    //   <GlobalStyles />
    // </BrowserRouter>

    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<ProfilePage />} />
          <Route path='/:username' element={<ProfilePage />} />
          <Route path='/:username/:reponame' element={<RepositoriesPage />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </UserProvider>
  );
};
