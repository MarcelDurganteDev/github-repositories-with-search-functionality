import { FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GitHubLogo, SearchForm } from './headerStyles';

const Header: FC = () => {
  const [search, setSearch] = useState( '' );
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log( search );
    
    navigate('/' + search.toLowerCase().trim() );
  }

  return (
    <Container>
      <GitHubLogo />
      <SearchForm>
        <input
          placeholder='Enter Username or Repository Name...'
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
