import styled, { css } from 'styled-components';

import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPinLine,
  RiMailLine,
  RiLinksLine
} from 'react-icons/ri';

export const Container = styled.div``;

// Avatar + username (h1) + name (h2)

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 24px;

    > h1 {
      font-size: 26px;
      line-height: 1.25;
      color: var(--gray-dark);
      font-weight: 600;
    }

    > h2 {
      font-size: 20px;
      color: var(--username);
      font-weight: 300;
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

export const Avatar = styled.img`
  width: 16%;
  height: auto;
  border-radius: 50%;
  

  @media (min-width: 768px) {
    width: 100%;
  }
  
`;

// Text and icons for 'followers' + 'following'

export const Row = styled.ul`
  display: flex;
  align-items: center;

  // added to make to make 'folowers' and 'following' row break when screen is too small
  flex-wrap: wrap;
  margin: 20px 0;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 14px;
      color: var(--gray);
    }
    /* '*' all internal items will have this margin */
    > * {
      margin-right: 5px;
    }
  }
`;

// company, location, email and blog
export const Column = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
// starting from the 1st 'li' element all will have 10px margin top separating them
  li + li {
    margin-top: 10px;
  }

  span {
    margin-left: 5px;

    // if the screen size is too small the text will break inside adding '...'
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

// custom styles to pass to all icons
const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`
  ${iconCSS}
`;

export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconCSS}
`;

export const LocationIcon = styled(RiMapPinLine)`
  ${iconCSS}
`;

export const EmailIcon = styled(RiMailLine)`
  ${iconCSS}
`;

export const BlogIcon = styled(RiLinksLine)`
  ${iconCSS}
`;
