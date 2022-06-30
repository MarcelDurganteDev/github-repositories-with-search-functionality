import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: 100vh;
`; 

export const Container = styled.div`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`; 
  
export const GithubLoginButton = styled.button`
  background: var(--gray-dark);
  border: 1px solid #eaeaea;
  border-radius: 5px;
  padding: 10px;
  width: 200px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: var(--primary);
  cursor: pointer;
  &:hover {
    background: #eaeaea;
  }

`;
