import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../shared/interfaces';

interface IUserState {
  user: IUser;
}

const initialState: IUserState = {
  user: {
    accessToken: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    city: '',
    address: '',
  },
};

type TPayload = {
  user: IUser;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, { payload }: PayloadAction<TPayload>) => {
      state.user = payload.user;
    },
  },
});

export const user_reducer = userSlice.reducer;
export const { addUser } = userSlice.actions;
