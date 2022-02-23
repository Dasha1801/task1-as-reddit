import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { TiPencil } from 'react-icons/ti';
import { TStore } from '../redux';
import ModalUpdate from '../modal/modalUpdate';
import './userCard.scss';

function UserCard(): JSX.Element {
  const [show, setShow] = useState(false);
  const { name, email, phone, address, city } = useSelector((state: TStore) => state.user).user;

  return (
    <>
      <Card className="userPage">
        <Card.Header className="userHeader">
          User Profile
          <TiPencil size={25} className="iconHeader" onClick={() => setShow(true)} />
        </Card.Header>
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
      <ModalUpdate show={show} setState={setShow} />
    </>
  );
}

export default UserCard;
