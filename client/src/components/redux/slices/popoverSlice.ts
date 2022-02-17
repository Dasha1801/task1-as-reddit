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

const popoverSlice = createSlice({
  name: 'popover',
  initialState,
  reducers: {
    showPopover: (state, { payload }: PayloadAction<TPayload>) => {
      state.show = payload.show;
    },
  },
});

export const popover_reducer = popoverSlice.reducer;
export const { showPopover } = popoverSlice.actions;
