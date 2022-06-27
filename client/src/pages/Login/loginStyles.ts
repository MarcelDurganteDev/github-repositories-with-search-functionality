import styled from 'styled-components';


export const Wrapper = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: 100vh;
`; 

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    background-color: var(--gray);
    border: none;
    border-radius: 15px;
    color: var(--primary);
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background-color: var(--gray-dark);
    }
  }
`;

