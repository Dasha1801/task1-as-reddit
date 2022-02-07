import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Overlay, Popover } from 'react-bootstrap';
import ModalLogIn from '../modal/modalLogIn';
import ModalSignUp from '../modal/modalSignUp';
import './iconUser.scss';

function IconUser(): JSX.Element {
  const [showPopover, setShowPopover] = useState(false);
  const [target, setTarget] = useState(null);
  const [showModalLogIn, setShowModalLogIn] = useState(false);
  const [showModalSignUp, setShowModalSignUp] = useState(false);

  const handleShowLogIn = (): void => {
    setShowPopover(!showPopover);
    setShowModalLogIn(true);
  };
  const handleShowSignUp = (): void => {
    setShowPopover(!showPopover);
    setShowModalSignUp(true);
  };

  const handleClick = (event: React.BaseSyntheticEvent): void => {
    setShowPopover(!showPopover);
    setTarget(event.target);
  };

  return (
    <div className="wrapperIconUser">
      <FaUser className="iconUser" onClick={handleClick} data-testid="logoUser" />
      <Overlay show={showPopover} target={target} placement="bottom" containerPadding={30}>
        <Popover id="popover-contained">
          <Popover.Body>
            <button type="button" className="item" onClick={handleShowLogIn}>
              Log In
            </button>
            <button type="button" className="item" onClick={handleShowSignUp}>
              Sign Up
            </button>
          </Popover.Body>
        </Popover>
      </Overlay>
      <ModalLogIn show={showModalLogIn} setState={setShowModalLogIn} />
      <ModalSignUp show={showModalSignUp} setState={setShowModalSignUp} />
    </div>
  );
}

export default IconUser;
