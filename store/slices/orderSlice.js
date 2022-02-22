import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'filter',
  initialState : {
    detail: {},
    loadingDetail: false
  },
  reducers: {
    searchDetail: (state, action) => {
        state.loadingDetail = true;
    },
    searchDetailSuccess: (state, action) => {
        state.loadingDetail = false;
        state.detail = action.payload;
    }
  },
  
})

// Action creators are generated for each case reducer function
export const { searchDetail, searchDetailSuccess } = orderSlice.actions

export default orderSlice.reducer
