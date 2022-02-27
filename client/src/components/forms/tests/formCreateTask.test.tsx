import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { store } from '../../redux';
import FormCreateTask from '../formCreateTask';

describe('Test FormCreateTask component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <FormCreateTask />
      </Provider>
    );

    expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument();
    expect(screen.getByTestId('task')).toBeInTheDocument();
    expect(screen.getByTestId('description')).toBeInTheDocument();
  });

  it('should be a validation check', async () => {
    render(
      <Provider store={store}>
        <FormCreateTask />
      </Provider>
    );

    const btnAddTask = screen.getByRole('button', { name: /add task/i });
    const input = screen.getByTestId('task');
    const textarea = screen.getByTestId('description');

    userEvent.click(btnAddTask);
    expect(await screen.findByText('Task is required')).toBeInTheDocument();
    expect(await screen.findByText('Description is required')).toBeInTheDocument();

    userEvent.type(input, 'get');
    userEvent.type(textarea, 'get');
    userEvent.click(btnAddTask);

    expect(await screen.findByText('Task must be at least 4 characters')).toBeInTheDocument();
    expect(await screen.findByText('Description must be at least 6 characters')).toBeInTheDocument();
  });
});
