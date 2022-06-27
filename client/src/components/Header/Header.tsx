import React from 'react'

import { Container, GitHubLogo, SearchForm } from './headerStyles'

const Header: React.FC = () => {
  return (
    <Container>
      <GitHubLogo />
      <SearchForm >
        <input placeholder="Enter Username or Repository Name..." />
      </SearchForm>
    </Container>
  )
}

export default Header;