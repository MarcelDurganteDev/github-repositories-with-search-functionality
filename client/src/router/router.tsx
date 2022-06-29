import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
// import { ProtectedRoute } from '../hooks/ProtectedRoute';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RepositoriesPage from '../pages/RepositoriesPage/RepositoriesPage'
import Header from '../components/Header/Header';

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

    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<ProfilePage />} />
          <Route path='/:username' element={<ProfilePage />} />
          <Route path='/:username/:reponame' element={<RepositoriesPage />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
  );
};
