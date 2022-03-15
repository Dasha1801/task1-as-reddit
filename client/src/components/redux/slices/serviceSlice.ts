import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IService {
  productId: string;
  servicesName: string;
  serviceId: string;
}

interface IServices {
  services: IService[];
}

const initialState: IServices = {
  services: [],
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    getServices: (state, { payload }: PayloadAction<IService[]>) => {
      state.services = payload;
    },
  },
});

export const service_reducer = serviceSlice.reducer;
export const { getServices } = serviceSlice.actions;
