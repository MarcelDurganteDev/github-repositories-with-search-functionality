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
  // @TODO: check why it is only working with '!important'
  max-width: 1280px !important;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  padding: 0 var(--horizontalPadding);
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

export const RepositoriesList = styled.div`
  margin-top: var(--verticalPadding);

  > h2 {
    font-size: 16px;
    font-weight: normal;
  }

  > div {
    margin-top: 8px;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
