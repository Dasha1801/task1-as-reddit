import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISavedService } from '../../../shared/interfaces';

interface IStateServices {
  services: ISavedService[];
  isRerendering: boolean;
}

const initialState: IStateServices = {
  services: [],
  isRerendering: false,
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    getServices: (state, { payload }: PayloadAction<ISavedService[]>) => {
      state.services = payload;
    },
    changeStatusUpdate: (state, { payload }: PayloadAction<boolean>) => {
      state.isRerendering = payload;
    },
  },
});

export const service_reducer = serviceSlice.reducer;
export const { getServices, changeStatusUpdate } = serviceSlice.actions;
