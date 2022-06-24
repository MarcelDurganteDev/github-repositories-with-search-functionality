import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
display: flex;
align-items: center;
background-color: var(--header);
padding: 11px 16px;
`;

export const GitHubLogo = styled( FaGithub )`
fill: var(--logo);
width: 24px;
height: 24px;
// flex-shrink is used to prevent the icon from shrinking when the header is too small
flex-shrink: 0;
`;

export const SearchForm = styled.form`
padding-left: 16px;
width: 100%;

input { 
  background: var( --search );
  outline: none;
  border-radius: 6px;
  padding: 7px 12px;
  width: 100%;

  &:focus {
    width: 318px;
  }

  transition: width .2s ease-out, color .2s ease-out;

}
`;


