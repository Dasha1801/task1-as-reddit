import React, { useCallback, useEffect, useState } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import classNames from 'classnames';
import './buttonScrollTop.scss';

function ButtonScrollUp(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  const stylesButton = classNames('iconScrollUp', {
    activeButton: isVisible,
  });

  const toggleVisibility = useCallback(() => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    document.addEventListener('scroll', toggleVisibility);

    return function removeScrollHandler(): void {
      document.removeEventListener('scroll', toggleVisibility);
    };
  }, [toggleVisibility]);

  return <FaAngleDoubleUp className={stylesButton} onClick={scrollToTop} />;
}

export default ButtonScrollUp;
