import styled from 'styled-components';
import { RiBookMarkLine } from 'react-icons/ri';

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

export const RepositoriesPage = styled.div`
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

export const RepositoryIcon = styled(RiBookMarkLine)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const Tab = styled.div`
  background: var(--primary);
  .content {
    display: flex;
    // vertical center of the tab
    align-items: center;
    width: min-content;
    padding: 14px 16px;
    border-bottom: 2px solid var(--orange);
    .label {
      font-size: 14px;
      font-weight: 600;
      padding: 0 7px;
    }
    .number {
      font-size: 12px;
      background-color: var(--ticker);
      padding: 2px 6px;
      border-radius: 24px;
    }
  }
  // @TODO: on desktop view line should pass behind avatar image
  .line {
    display: flex;
    width: 200vh;
    border-bottom: 1px solid var(--border);
    margin-left: -50vw;
  }

  // fot tab class mobile view only adds space between tab and user info (right side vs. left side)
  &.mobile {
    margin-top: var(--verticalPadding);
    // content of tab class mobile horizontaly aligned (auto)
    .content {
      margin: 0 auto;
    }
    @media (min-width: 768px) {
      display: none;
    }
  }

  &.desktop {
    display: none;
    @media (min-width: 768px) {
      display: unset;
      .wrapper {
        display: flex;
        margin: 0 auto;
        max-width: 1280px;
      }
      .offset {
        width: 25%;
        margin-right: var(--horizontalPadding);
      }
    }
  }
`;
