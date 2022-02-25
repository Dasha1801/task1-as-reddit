import React, { useState } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { Form } from 'react-bootstrap';
import { BsFilePost, BsEye } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { timeout } from '../../constants';
import './community.scss';

function Community(): JSX.Element {
  const [show, setShow] = useState(false);
  const showDescription = (): void => setShow(!show);

  return (
    <div className="itemSidebar">
      <header className="title">About Community</header>
      <div className="contentSidebar">
        <h3 className="aboutCommunity">
          All about the <span className="highlightItem">javascript</span> programming language!
        </h3>
        <div className="members">
          <div className="itemMembers">
            <span className="countMembers">1.9m</span>
            <span className="nameCount">Members</span>
          </div>
          <div className="itemMembers">
            <span className="countMembers">291</span>
            <span className="nameCount">Online</span>
          </div>
        </div>
        <div className="createPost">
          <BsFilePost size={16} style={{ marginRight: '5px' }} />
          <h3 className="aboutCommunity">Created Jan 25, 2008</h3>
          <button type="button" className="btn">
            Create Post
          </button>
        </div>
        <div className="options">
          <h3 className="optionsCommunity">community options</h3>
          <MdOutlineKeyboardArrowDown
            className={classNames('arrowOptions', { rotate: show })}
            onClick={showDescription}
          />
        </div>
        <CSSTransition in={show} timeout={timeout} classNames="animation-item" unmountOnExit appear>
          <div className="theme">
            <div className="wrapperTheme">
              <BsEye size={18} style={{ marginRight: '5px', display: 'block' }} />
              <h3 className="titleTheme">Community theme</h3>
            </div>
            <Form.Check type="switch" id="custom-switch" style={{ fontSize: '18px' }} />
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Community;
