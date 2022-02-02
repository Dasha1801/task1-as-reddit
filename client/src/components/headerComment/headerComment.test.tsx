import { render, screen } from '@testing-library/react';
import React from 'react';
import HeaderComment from './headerComment';
import { commentMock } from '../../shared/mocks';

const { author, created_utc } = commentMock;

describe('Test HeaderComment component', () => {
  it('should render component', async () => {
    render(<HeaderComment author={author} created_utc={created_utc} />);

    expect(screen.getByText('simon')).toBeInTheDocument();
    expect(screen.getByTestId('iconUser')).toBeInTheDocument();
  });
});
