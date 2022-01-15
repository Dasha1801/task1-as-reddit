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

  it('Likes render', () => {
    const countLikes = screen.getByTestId('display-score');
    expect(countLikes).toHaveTextContent(score.toString());
  });

  it('Logic component', () => {
    const btnInc = screen.getByTestId('inc');
    const btnDec = screen.getByTestId('dec');
    const countLikes = screen.getByTestId('display-score');
    expect(countLikes).toHaveStyle('color:  rgb(0, 0, 0)');
    userEvent.click(btnInc);
    expect(countLikes).toHaveTextContent((score + 1).toString());
    expect(btnInc).toHaveStyle('color: rgb(28, 81, 226)');
    userEvent.click(btnInc);
    expect(countLikes).toHaveTextContent(score.toString());
    userEvent.click(btnDec);
    expect(countLikes).toHaveTextContent((score - 1).toString());
    expect(btnDec).toHaveStyle('color: rgb(231, 94, 40)');
  });
});
