import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRulesSubreddit } from '../../../shared/interfaces';

interface IRulesSubredditState {
    rulesSubreddit: IRulesSubreddit[]
}

const initialState: IRulesSubredditState = {
    rulesSubreddit: [],
};

type TPayload = {
    rulesSubreddit: IRulesSubreddit[];
};

const rulesSubredditSlice = createSlice({
    name: 'rulesSubreddit',
    initialState,
    reducers: {
        setRulesSubreddit: (state, { payload }: PayloadAction<TPayload>) => {
            state.rulesSubreddit = payload.rulesSubreddit;
        },
    },
});

export const rulesSubreddit_reducer = rulesSubredditSlice.reducer;
export const { setRulesSubreddit } = rulesSubredditSlice.actions;
