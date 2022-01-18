import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILoadingState {
  loading: boolean
}

const initialState: ILoadingState = {
  loading: true,
};

type TPayload = {
  loading: boolean;
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    getStateLoading: (state, { payload }: PayloadAction<TPayload>) => {
      state.loading = payload.loading;
    },
  },
});

export const loading_reducer = loadingSlice.reducer;
export const { getStateLoading } = loadingSlice.actions;
