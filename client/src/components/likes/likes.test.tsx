import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import Likes from './likes';
import { item } from '../../shared/mocks';

const { score } = item;

describe('Test Likes component', () => {
  it('should render Likes', () => {
    render(<Likes score={score} />);
    const countLikes = screen.getByTestId('display-score');

    expect(countLikes).toHaveTextContent(score.toString());
  });

  it('should be testing logic component', () => {
    render(<Likes score={score} />);
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
    render(<Likes score={score} />);
    const btnInc = screen.getByTestId('inc');

    const countLikes = screen.getByTestId('display-score');
    userEvent.click(btnInc);
    userEvent.click(btnInc);

    expect(countLikes).toHaveTextContent(score.toString());
  });

  it('should unselect button when decrement button clicked 2 times', () => {
    render(<Likes score={score} />);
    const btnDec = screen.getByTestId('dec');

    const countLikes = screen.getByTestId('display-score');
    userEvent.click(btnDec);
    userEvent.click(btnDec);

    expect(countLikes).toHaveTextContent(score.toString());
  });
});
