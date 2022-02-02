import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISortState {
    sortType: TSort
}

export type TSort = 'new' | 'old' | 'top';

const initialState: ISortState = {
    sortType: 'new',
};

type TPayload = {
    sortType: TSort;
};

const sortSlice = createSlice({
    name: 'sortType',
    initialState,
    reducers: {
        changeSortType: (state, { payload }: PayloadAction<TPayload>) => {
            state.sortType = payload.sortType;
        },
    },
});

export const sort_reducer = sortSlice.reducer;
export const { changeSortType } = sortSlice.actions;
