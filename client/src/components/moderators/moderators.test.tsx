import { screen, render } from '@testing-library/react';
import React from 'react';
import Moderators from './moderators';

describe('Test component Moderators', () => {
  it('should be render component', () => {
    render(<Moderators />);

    expect(screen.getByText('Moderators')).toBeInTheDocument();
    expect(screen.getAllByTestId('moderator')).toHaveLength(7);
    expect(screen.getByRole('button', { name: /message the mods/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /view all moderators/i })).toBeInTheDocument();
  });
});
