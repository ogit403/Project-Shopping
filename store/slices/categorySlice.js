import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'category',
  initialState : {
      list: [],
      loadingList: false,
  },
  reducers: {
      getCategory: (state, action) => {
        state.loadingList = true;
      },
      getCategorySuccess: (state, action) => {
          state.list = action.payload;
          state.loadingList = false;
      }
  },
  
})

// Action creators are generated for each case reducer function
export const {getCategory, getCategorySuccess} = categorySlice.actions

export default categorySlice.reducer
