import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { TStore } from '../redux';
import './userPage.scss';

function UserPage(): JSX.Element {
  const { name, email, phone, address, city } = useSelector((state: TStore) => state.user).user;

  return (
    <div className="wrapperUserPage">
      <Card className="userPage">
        <Card.Header>User Profile</Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p className="infoItem">Email: {email}</p>
            <p className="infoItem">Phone: {phone}</p>
            <p className="infoItem">City: {city}</p>
            <p className="infoItem">Address: {address}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserPage;
