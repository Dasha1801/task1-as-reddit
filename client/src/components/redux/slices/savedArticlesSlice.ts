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
    addSavedArticle: (state, { payload }: PayloadAction<ArticleInfo>) => {
      state.savedArticles = [...state.savedArticles, payload];
    },
    removeArticle: (state, { payload }: PayloadAction<ArticleInfo>) => {
      state.savedArticles = state.savedArticles.filter((el) => el.id !== payload.id);
    },
  },
});

export const savedArticles_reducer = savedArticlesSlice.reducer;
export const { addSavedArticle, removeArticle } = savedArticlesSlice.actions;
