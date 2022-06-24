import styled, { css } from 'styled-components';

import { RiGroupLine, RiBuilding4Line, RiMapPinLine, RiMailLine, RiLinksLine } from 'react-icons/ri';

export const Container = styled.div``;

export const Flex = styled.div``;

export const Avatar = styled.img``;

export const Row = styled.div``;

export const Column = styled.div``;

// custom styles to pass to all icons

const iconCSS = css`
width: 16px;
height: 16px;
fill: var(--icon);
flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`${iconCSS}`;

export const CompanyIcon = styled(RiBuilding4Line)`${iconCSS}`;

export const LocationIcon = styled(RiMapPinLine)`${iconCSS}`;

export const EmailIcon = styled(RiMailLine)`${iconCSS}`;

export const BlogIcon = styled(RiLinksLine)`${iconCSS}`;
