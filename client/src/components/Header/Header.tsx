/**
 * @description Header component is used to dipsplay on top of the page (main container in ProfilePage and RepositoriesPage) and it consists of the sercah bar (SearchFrom) and the logo.
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, GitHubLogo, SearchForm } from './headerStyles';


const Header: React.FC = () => {
  const [search, setSearch] = useState( '' );
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    navigate('/' + search.toLowerCase().trim() );
  }

  return (
    <Container>
      <GitHubLogo />
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder='Enter Username or Username/Repository Name...'
          value={search}
          onChange={e => setSearch( e.currentTarget.value )}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;


