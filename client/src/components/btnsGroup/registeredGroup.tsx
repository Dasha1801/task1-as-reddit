import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteUser } from '../redux/slices/userSlice';

function RegisteredGroup(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <>
      <NavLink to="/user">
        <button type="button" className="item">
          Profile
        </button>
      </NavLink>

      <button type="button" className="item" onClick={() => dispatch(deleteUser())}>
        Exit
      </button>
    </>
  );
}

export default RegisteredGroup;
