import { FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../store/contexts/UserContext';
import { Container, GitHubLogo, SearchForm } from './headerStyles';
const mockData = require('../../db/data.json');


const Header: FC = () => {
  const [search, setSearch] = useState( '' );
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    navigate('/' + search.toLowerCase().trim() );
  }

  return (
    <Container>
      <GitHubLogo />
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder='Enter Username or Repository Name...'
          value={search}
          onChange={e => setSearch( e.currentTarget.value )}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
