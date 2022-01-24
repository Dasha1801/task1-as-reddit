import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleInfo } from '../../../shared/interfaces';

interface IArticleState {
  savedArticles: ArticleInfo[]
}

const initialState: IArticleState = {
  savedArticles: [],
};

type TPayload = {
  savedArticles: ArticleInfo;
};

const savedArticlesSlice = createSlice({
  name: 'savedArticles',
  initialState,
  reducers: {
    saveArticles: (state, { payload }: PayloadAction<TPayload>) => {
      state.savedArticles = [...state.savedArticles, payload.savedArticles];
    },
    removeArticles: (state, { payload }: PayloadAction<TPayload>) => {
      state.savedArticles = state.savedArticles.filter((el) => el.id !== payload.savedArticles.id);
    },
  },
});

export const savedArticles_reducer = savedArticlesSlice.reducer;
export const { saveArticles } = savedArticlesSlice.actions;
export const { removeArticles } = savedArticlesSlice.actions;
