import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleInfo } from 'shared/interfaces';

interface IArticleState{
  articles: ArticleInfo[]
}

const initialState:IArticleState = {
  articles: [],
};

  type TPayload = {
    articles: ArticleInfo[];
  };

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, { payload }: PayloadAction<TPayload>) => {
      state.articles = payload.articles;
    },
  },
});

export const articles_reducer = articlesSlice.reducer;
export const { setArticles } = articlesSlice.actions;
