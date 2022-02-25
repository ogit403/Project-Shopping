import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState : {
    keyword: '',
    list: [],
    loadingSearch: false
  },
  reducers: {
    saveKeywordSearch: (state, action) => {
      state.keyword = action.payload;
    },
    searchValue: (state, action) => {
      state.loadingSearch = true;
    },
    searchValueSuccess: (state, action) => {
      console.log('success');
      state.loadingSearch = false;
      state.list = action.payload;
    }
  },
  
})

// Action creators are generated for each case reducer function
export const { saveKeywordSearch, searchValue, searchValueSuccess } = searchSlice.actions

export default searchSlice.reducer
