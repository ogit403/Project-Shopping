import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState : {
    filter: {
      items: '',
      minPrice: 0,
      maxPrice: 50000000,
      category: null
    }
  },
  reducers: {
    toggleFilter: (state, action) => {
      state.filter = action.payload;
    },
    initCategoryFilter: (state, action) => {
      state.filter = {...state.filter, category: action.payload}
    }
  },
  
})

// Action creators are generated for each case reducer function
export const { toggleFilter, initCategoryFilter } = filterSlice.actions

export default filterSlice.reducer
