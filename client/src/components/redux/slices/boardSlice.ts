import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IColumns, IItemBoard, IBoard } from '../../../shared/interfaces';

const initialState: IBoard = {
  board: {
    tasks: {
      name: 'Tasks',
      items: [],
    },
    progress: {
      name: 'In Progress',
      items: [],
    },
    done: {
      name: 'Done',
      items: [],
    },
  },
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<IItemBoard>) => {
      state.board.tasks.items = [...state.board.tasks.items, payload];
    },
    updateBoard: (state, { payload }: PayloadAction<IColumns>) => {
      state.board = payload;
    },
  },
});

export const board_reducer = boardSlice.reducer;
export const { addTask, updateBoard } = boardSlice.actions;
