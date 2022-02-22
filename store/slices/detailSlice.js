import { createSlice } from '@reduxjs/toolkit'

export const detailSlice = createSlice({
  name: 'detail',
  initialState : {
    detail: {},
    loadingDetail: false
  },
  reducers: {
    getDetail: (state, action) => {
      state.loadingDetail = true;
    },
    getDetailSuccess: (state, action) => {
      state.detail = action.payload;
      state.loadingDetail = false;
    }
  },
  
})

// Action creators are generated for each case reducer function
export const {getDetail, getDetailSuccess} = detailSlice.actions

export default detailSlice.reducer
