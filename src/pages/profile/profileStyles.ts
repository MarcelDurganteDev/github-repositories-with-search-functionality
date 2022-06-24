import styled from 'styled-components';

// most outer container

export const Container = styled.div`
--horizontalPadding: 16px;
--verticalPadding: 24px;

padding: var(--verticalPadding) var(--horizontalPadding);
`;

export const Main = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
// same max width as in GitHub 
max-width: 1280px;

@media (min-width: 768px) {
  flex-direction: row;
}
`;


export const LeftSide = styled.div`

// github division is 25% for the left side on web view and 75% for the right side 
@media (min-width: 768px) {
  width: 25%;
}
`;


export const RightSide = styled.div`
  @media (min-width: 768px) {
    width: 75%;
  }
`;

