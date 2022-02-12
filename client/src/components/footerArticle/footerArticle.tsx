import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { FaMedal, FaRegCommentAlt, FaShare } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteArticle, saveInDbArticle } from '../../server/api';
import { InfoItem } from '../../shared/interfaces';
import ErrorAlert from '../alert/baseAlert';
import { TStore } from '../redux';
import { getSavedArticles } from '../redux/asyncActions';
import './footerArticle.scss';

function FooterArticle({ item, className }: InfoItem): JSX.Element {
  const { savedArticles } = useSelector((state: TStore) => state.savedArticles);
  const { accessToken } = useSelector((state: TStore) => state.user).user;
  const [saved, setSaved] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { num_comments } = item;

  const saveArticle = async (): Promise<void> => {
    if (!saved) {
      try {
        const resServer = await saveInDbArticle(item, accessToken);
        if (resServer.data) {
          getSavedArticles(accessToken)(dispatch);
          setSaved(true);
        }
      } catch {
        setShow(true);
      }
    } else {
      await deleteArticle({ id: item.id }, accessToken);
      getSavedArticles(accessToken)(dispatch);
      setSaved(false);
    }
  };

  useEffect(() => {
    const { id } = item;
    const isSaveItem = savedArticles.find((el) => el.id === id);
    isSaveItem && setSaved(true);
  }, [item, savedArticles.length]);

  return (
    <footer className="footer">
      <nav className="navFooter">
        <ul className={`listLink ${className}`}>
          <li className="link">
            <FaRegCommentAlt className="icon" size="16px" />
            <span className="countComments" data-testid="count-comments">
              {num_comments}
            </span>
            Comments
          </li>
          <li className="link">
            <FaMedal className="icon" size="16px" />
            Award
          </li>
          <li
            className={classNames('link', {
              save: saved,
            })}
            data-testid="listItemSave"
          >
            <FaShare className="icon" size="16px" onClick={saveArticle} data-testid="iconSave" />
            {saved ? 'Saved' : 'Unsaved'}
          </li>
        </ul>
      </nav>
      {show && <ErrorAlert setState={setShow} text="Available for registered users only!" variant="danger" />}
    </footer>
  );
}

export default FooterArticle;
