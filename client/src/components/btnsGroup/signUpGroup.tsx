import React from 'react';
import { IPropsSignUpGroup } from '../../shared/interfaces';

function SignUpGroup({
  setShowPopover,
  setShowModalLogIn,
  setShowModalSignUp,
  showPopover,
}: IPropsSignUpGroup): JSX.Element {

  const handleShowLogIn = (): void => {
    setShowPopover(!showPopover);
    setShowModalLogIn(true);
  };
  const handleShowSignUp = (): void => {
    setShowPopover(!showPopover);
    setShowModalSignUp(true);
  };

  return (
    <>
      <button type="button" className="item" onClick={handleShowLogIn}>
        Log In
      </button>
      <button type="button" className="item" onClick={handleShowSignUp}>
        Sign Up
      </button>
    </>
  );
}

export default SignUpGroup;
