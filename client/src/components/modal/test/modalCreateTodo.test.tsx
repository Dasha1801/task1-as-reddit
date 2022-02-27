import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux';
import ModalCreateTask from '../modalCreateTodo';

describe('Test ModalCreateTask component', () => {
  it('should render component', async () => {
    const setState = jest.fn();
    render(
      <Provider store={store}>
        <ModalCreateTask show setState={setState} />
      </Provider>
    );

    expect(screen.getByText(/create new task/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument();
  });

  it('should be input fields that can be filled in and cleared', () => {
    const setState = jest.fn();
    render(
      <Provider store={store}>
        <ModalCreateTask show setState={setState} />
      </Provider>
    );

    const task = screen.getByTestId(/task/i);
    const description = screen.getByTestId(/description/i);

    userEvent.type(task, 'you need to write tests');
    userEvent.type(description, 'today until 8pm');

    expect(screen.getByTestId<HTMLInputElement>(/task/).value).toEqual('you need to write tests');
    expect(screen.getByTestId<HTMLInputElement>(/description/).value).toEqual('today until 8pm');

    userEvent.clear(task);
    userEvent.clear(description);

    expect(screen.getByTestId<HTMLInputElement>(/task/).value).toEqual('');
    expect(screen.getByTestId<HTMLInputElement>(/description/).value).toEqual('');
  });
});
