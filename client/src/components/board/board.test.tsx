import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { store } from '../redux';
import Board from './board';

describe('Test Board component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <Board />
      </Provider>
    );

    expect(screen.getByText(/create your todo/i)).toBeInTheDocument();
    expect(screen.getByText(/tasks/i)).toBeInTheDocument();
    expect(screen.getByText(/in progress/i)).toBeInTheDocument();
    expect(screen.getByText(/done/i)).toBeInTheDocument();
  });

  it('should create new task, update task, delete task', async () => {
    render(
      <Provider store={store}>
        <Board />
      </Provider>
    );

    const iconAddTask = screen.getByTestId('iconAddTask');

    userEvent.click(iconAddTask);

    expect(screen.getByText(/create new task/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('task'), 'you need write test');
    userEvent.type(screen.getByTestId('description'), 'today until 8pm');
    userEvent.click(screen.getByText(/add task/i));
    userEvent.click(screen.getByRole('dialog'));

    await waitForElementToBeRemoved(() => screen.queryByText(/create new task/i));
    const task = screen.getByText('you need write test');

    expect(task).toHaveClass('taskText');

    userEvent.click(screen.getByTestId('eyeIcon'));

    expect(screen.getByText(/do you update task/i)).toBeInTheDocument();

    userEvent.clear(screen.getByTestId('task'));
    userEvent.type(screen.getByTestId('task'), 'you need add styles');
    userEvent.click(screen.getByRole('button', { name: /update task/i }));

    await waitForElementToBeRemoved(() => screen.queryByText(/do you update task/i));

    expect(screen.getByText('you need add styles')).toHaveClass('taskText');

    userEvent.click(screen.getByTestId('iconDeleteTask'));

    expect(screen.queryByText('you need add styles')).not.toBeInTheDocument();
  });
});
