import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleInfo } from '../../../shared/interfaces';

interface IArticleState {
  savedArticles: ArticleInfo[];
}

const initialState: IArticleState = {
  savedArticles: [],
};

const savedArticlesSlice = createSlice({
  name: 'savedArticles',
  initialState,
  reducers: {
    setSavedArticles: (state, { payload }: PayloadAction<ArticleInfo[]>) => {
      state.savedArticles = payload;
    },
    resetSavedArticles: (state) => {
      state.savedArticles = initialState.savedArticles;
    },
  },
});

export const savedArticles_reducer = savedArticlesSlice.reducer;
export const { setSavedArticles, resetSavedArticles } = savedArticlesSlice.actions;
