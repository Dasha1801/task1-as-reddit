import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sortComments } from '../../../utils/index';
import { ArticleInfo, ICommentInfo } from '../../../shared/interfaces';
import { TSort } from './sortSlice';

interface IArticleState {
  article: ArticleInfo;
  comments: ICommentInfo[];
}

const initialState: IArticleState = {
  article: {
    author: '',
    title: '',
    id: '',
    selftext: '',
    url: '',
    score: 0,
    num_comments: 0,
  },
  comments: [],
};

type TPayloadComments = {
  comments: ICommentInfo[];
};

type TPayloadPost = {
  article: ArticleInfo;
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setComments: (state, { payload }: PayloadAction<TPayloadComments>) => {
      state.comments = payload.comments;
    },
    getArticle: (state, { payload }: PayloadAction<TPayloadPost>) => {
      state.article = payload.article;
    },
    sortBy: (state, { payload }: PayloadAction<TSort>) => {
      state.comments = sortComments(payload, state.comments);
    },
  },
});

export const article_reducer = articleSlice.reducer;
export const { setComments, getArticle, sortBy } = articleSlice.actions;
