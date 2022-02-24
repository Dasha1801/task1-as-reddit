import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IColumns, IItemBoard } from '../../../shared/interfaces';

const initialState: IColumns = {
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
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<IItemBoard>) => {
      state.tasks.items = [...state.tasks.items, payload];
    },
  },
});

export const board_reducer = boardSlice.reducer;
export const { addTask } = boardSlice.actions;
