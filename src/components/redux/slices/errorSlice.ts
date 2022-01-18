import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IErrorState {
  error: boolean
}

const initialState: IErrorState = {
  error: false,
};

type TPayload = {
  error: boolean;
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    getStateError: (state, { payload }: PayloadAction<TPayload>) => {
      state.error = payload.error;
    },
  },
});

export const error_reducer = errorSlice.reducer;
export const { getStateError } = errorSlice.actions;
