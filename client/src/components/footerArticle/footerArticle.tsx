import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import { FaMedal, FaRegCommentAlt, FaShare } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteArticle, fetchSavedArticles, saveInDbArticle } from '../../server/api';
import { InfoItem } from '../../shared/interfaces';
import { TStore } from '../redux';
import { setSavedArticles } from '../redux/slices/savedArticlesSlice';
import './footerArticle.scss';

function FooterArticle({ item, className }: InfoItem): JSX.Element {
  const { savedArticles } = useSelector((state: TStore) => state.savedArticles);
  const [saved, setSaved] = useState(false);
  const dispatch = useDispatch();
  const { num_comments } = item;

  const getSavedArticles = useCallback(() => {
    fetchSavedArticles().then((res) => dispatch(setSavedArticles(res)));
  }, [dispatch]);

  const saveArticle = async (): Promise<void> => {
    if (!saved) {
      await saveInDbArticle(item);
      getSavedArticles();
      setSaved(true);
    } else {
      await deleteArticle({ id: item.id });
      getSavedArticles();
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
    </footer>
  );
}

export default FooterArticle;
