import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleInfo, ICommentInfo } from '../../../shared/interfaces';

interface ICommentState {
  post: ArticleInfo
  comments: ICommentInfo[]
}

const initialState: ICommentState = {
  comments: [],
  post: {
    author: '',
    title: '',
    id: '',
    selftext: '',
    url: '',
    score: 0,
    num_comments: 0,
  }
};

type TPayloadComments = {
  comments: ICommentInfo[];
};

type TPayloadPost = {
  post: ArticleInfo;
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, { payload }: PayloadAction<TPayloadComments>) => {
      state.comments = payload.comments;
    },
    getPost: (state, { payload }: PayloadAction<TPayloadPost>) => {
      state.post = payload.post;
    },
  },
});

export const comments_reducer = commentsSlice.reducer;
export const { setComments, getPost } = commentsSlice.actions;
