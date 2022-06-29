/**
 * @description: ProfileData component is used to display user data. It is used in ProfilePage.
 *
 * @returns: JSX.Element ProfileData component with: Container is used to wrap the entire component. Flex is used to align the component. Avatar is used to display the user avatar. Row is used to display the user data. Column is used to display the user data.
 *
 * @interface Props  ( in Typescript for an element to receive props, an interface must be defined ). Company, Location, Email, Blog are optional fields as they are not always provided/published by the user.
 * 
 * @props username: username of the user.
 * @props name: name of the user.
 * @props avatarUrl: avatar url of the user.
 * @props followers: number of followers of the user.
 * @props following: number of users the user is following.
 * @props company: company of the user.
 * @props location: location of the user.
 * @props email: email of the user.
 * @props blog: blog of the user.
 * @returns
 * @memberof ProfileData
 *
 */

import { FC } from 'react';

import {
  Container,
  Flex,
  Avatar,
  Row,
  Column,
  PeopleIcon,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  BlogIcon
} from './profileDataStyles';

interface Props {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  // below are optional
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
}

const ProfileData: FC<Props> = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  company,
  location,
  email,
  blog
}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={username} />
        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </Flex>
      <Row>
        <li>
          <PeopleIcon />
          <b>{followers}</b>
          <span>followers</span>
          {/* @TODO look for special carachter to make it look better */}
          <span>.</span>
        </li>
        <li>
          <b>{following}</b>
          <span>following</span>
          {/* @TODO look for special carachter to make it look better */}
          <span>.</span>
        </li>
      </Row>
      <Column>
        {company && (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li>
            <BlogIcon />
            <span>{blog}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default ProfileData;
