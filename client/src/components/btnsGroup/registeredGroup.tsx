import React from 'react';
import { FaUserAstronaut } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../server/api';
import { TStore } from '../redux';
import { resetSavedArticles } from '../redux/slices/savedArticlesSlice';
import { addUser } from '../redux/slices/userSlice';
import './btnsGroup.scss';

function RegisteredGroup(): JSX.Element {
  const { name, accessToken } = useSelector((state: TStore) => state.user).user;
  const dispatch = useDispatch();

  const handleExit = async (): Promise<void> => {
    const resServer = (await logoutUser(accessToken)).data;
    dispatch(addUser({ user: resServer }));
    dispatch(resetSavedArticles());
  };

  return (
    <>
      <NavLink to="/user" className="userProfile">
        <button type="button" className="item">
          <FaUserAstronaut className="iconUser" />
          {name}
        </button>
      </NavLink>

      <button type="button" className="item" onClick={handleExit}>
        Exit
      </button>
    </>
  );
}

export default RegisteredGroup;
