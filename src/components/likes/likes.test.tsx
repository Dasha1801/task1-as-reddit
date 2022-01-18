import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import Likes from './likes';
import { item } from '../../shared/mocks';

const { score } = item;

describe('Likes component', () => {
  beforeEach(() => {
    render(<Likes score={score} />);
  });

  it('should render Likes', () => {
    const countLikes = screen.getByTestId('display-score');

    expect(countLikes).toHaveTextContent(score.toString());
  });

  it('should be testing logic component', () => {
    const btnInc = screen.getByTestId('inc');
    const btnDec = screen.getByTestId('dec');
    const countLikes = screen.getByTestId('display-score');
    userEvent.click(btnInc);

    expect(countLikes).toHaveTextContent((score + 1).toString());

    userEvent.click(btnInc);

    expect(countLikes).toHaveTextContent(score.toString());

    userEvent.click(btnDec);

    expect(countLikes).toHaveTextContent((score - 1).toString());
  });

  it('should unselect button when increment button clicked 2 times', () => {
    const btnInc = screen.getByTestId('inc');

    const countLikes = screen.getByTestId('display-score');
    userEvent.click(btnInc);
    userEvent.click(btnInc);

    expect(countLikes).toHaveTextContent(score.toString());
  });

  it('should unselect button when increment button clicked 2 times', () => {
    const btnDec = screen.getByTestId('dec');

    const countLikes = screen.getByTestId('display-score');
    userEvent.click(btnDec);
    userEvent.click(btnDec);

    expect(countLikes).toHaveTextContent(score.toString());
  });
});
