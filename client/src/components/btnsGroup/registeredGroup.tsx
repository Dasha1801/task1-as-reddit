import React from 'react';
import { FaUserAstronaut } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../server/api';
import { TStore } from '../redux';
import { resetSavedArticles } from '../redux/slices/savedArticlesSlice';
import { addUser } from '../redux/slices/userSlice';
import './btnsGroup.scss';

function RegisteredGroup(): JSX.Element {
  const navigate = useNavigate();
  const { name, accessToken } = useSelector((state: TStore) => state.user).user;
  const dispatch = useDispatch();

  const handleExit = async (): Promise<void> => {
    const resServer = (await logoutUser(accessToken)).data;
    dispatch(addUser({ user: resServer }));
    dispatch(resetSavedArticles());
    navigate('/');
  };

  const navigateToUserPage = (): void => {
    navigate('/user');
  };

  return (
    <>
      <button
        type="button"
        className="item linkToPage"
        data-testid="linkToUserPage"
        onClick={navigateToUserPage}
      >
        <FaUserAstronaut className="iconUser" />
        {name}
      </button>
      <button type="button" className="item" onClick={handleExit}>
        Exit
      </button>
    </>
  );
}

export default RegisteredGroup;
