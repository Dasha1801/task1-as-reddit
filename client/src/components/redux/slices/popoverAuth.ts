import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPopoverState {
  show: boolean;
}

const initialState: IPopoverState = {
  show: false,
};

type TPayload = {
  show: boolean;
};

const popoverAuthSlice = createSlice({
  name: 'popover',
  initialState,
  reducers: {
    showPopoverAuth: (state, { payload }: PayloadAction<TPayload>) => {
      state.show = payload.show;
    },
  },
});

export const popoverAuth_reducer = popoverAuthSlice.reducer;
export const { showPopoverAuth } = popoverAuthSlice.actions;
