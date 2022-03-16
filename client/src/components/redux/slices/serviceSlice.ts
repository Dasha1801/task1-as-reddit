import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISavedService } from '../../../shared/interfaces';

interface IStateServices {
  services: ISavedService[];
}

const initialState: IStateServices = {
  services: [],
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    getServices: (state, { payload }: PayloadAction<ISavedService[]>) => {
      state.services = payload;
    },
  },
});

export const service_reducer = serviceSlice.reducer;
export const { getServices } = serviceSlice.actions;
