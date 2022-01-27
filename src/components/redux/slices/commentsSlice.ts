import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICommentInfo } from '../../../shared/interfaces';

interface ICommentState {
  comments: ICommentInfo[]
}

const initialState: ICommentState = {
  comments: [],
};

type TPayload = {
  comments: ICommentInfo[];
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, { payload }: PayloadAction<TPayload>) => {
      state.comments = payload.comments;
    },
  },
});

export const comments_reducer = commentsSlice.reducer;
export const { setComments } = commentsSlice.actions;
