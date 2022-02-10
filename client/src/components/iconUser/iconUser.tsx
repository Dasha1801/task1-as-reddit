import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { Overlay, Popover } from 'react-bootstrap';
import { TStore } from '../redux';
import SignUpGroup from '../btnsGroup/signUpGroup';
import RegisteredGroup from '../btnsGroup/registeredGroup';
import ModalLogIn from '../modal/modalLogIn';
import ModalSignUp from '../modal/modalSignUp';
import './iconUser.scss';

function IconUser(): JSX.Element {
  const { user } = useSelector((state: TStore) => state.user);
  const [showPopover, setShowPopover] = useState(false);
  const [target, setTarget] = useState(null);
  const [showModalLogIn, setShowModalLogIn] = useState(false);
  const [showModalSignUp, setShowModalSignUp] = useState(false);
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
            {user.name ? (
              <RegisteredGroup />
            ) : (
              <SignUpGroup
                setShowPopover={setShowPopover}
                setShowModalLogIn={setShowModalLogIn}
                setShowModalSignUp={setShowModalSignUp}
                showPopover={showPopover}
              />
            )}
          </Popover.Body>
        </Popover>
      </Overlay>
      <ModalLogIn show={showModalLogIn} setState={setShowModalLogIn} />
      <ModalSignUp show={showModalSignUp} setState={setShowModalSignUp} />
    </div>
  );
}

export default IconUser;
