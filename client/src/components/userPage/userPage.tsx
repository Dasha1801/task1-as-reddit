import React from 'react';
import Board from '../board/board';
import UserCard from '../userCard/userCard';
import './userPage.scss';

function UserPage(): JSX.Element {
  return (
    <div className="wrapperUserPage">
      <UserCard />
      <Board />
    </div>
  );
}

export default UserPage;
