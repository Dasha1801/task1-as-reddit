import React, { useCallback, useEffect, useState } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import './buttonScrollTop.scss';

function ButtonScrollTop(): JSX.Element | null {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleVisibility = useCallback(() => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', toggleVisibility);

    return function removeScrollHandler(): void {
      document.removeEventListener('scroll', toggleVisibility);
    };
  }, [toggleVisibility]);

  return isVisible ? (
    <FaAngleDoubleUp
      className="iconScrollUp"
      onClick={scrollToTop}
      data-testid="btnScrollToTop"
    />
  ) : null;
}

export default ButtonScrollTop;
