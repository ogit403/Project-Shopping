import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState : {
    slider: [],
    loadingSlider: false,
    cate: [],
    loadingCate: false,
    product: [],
    productNew: [],
    loadingProductNew: false,
    productSpec: [],
    loadingProductSpec: false,
    loadingProduct: false,
  },
  reducers: {
    getSliderHome: (state, action) => {
      state.loadingSlider = true;
    },
    getSliderHomeSuccess: (state, action) => {
      action.payload.map(item => {
        state.slider = [...new Set([...state.slider, item.image])]
      })
      state.loadingSlider = false;
    },
    getCateHome: (state, action) => {
      state.loadingCate = true;
    },
    getCateHomeSuccess: (state, action) => {
      state.cate = action.payload;
      state.loadingCate = false;
    },
    getProductHome: (state, action) => {
      state.loadingProduct = true;
    },
    getProductHomeSuccess: (state, action) => {
      // console.log('tra ket qua vao slice')
      state.product = action.payload;
      state.loadingProduct = false;
    },
    getProductNewHome: (state, action) => {
      state.loadingProductNew = true;
    },
    getProductNewHomeSuccess: (state, action) => {
      state.productNew = action.payload;
      state.loadingProductNew = false;
    },
    getProductSpecHome: (state, action) => {
      state.loadingProductSpec = true;
    },
    getProductSpecHomeSuccess: (state, action) => {
      state.productSpec = action.payload;
      state.loadingProductSpec = false;
    },
  },
  
})

// Action creators are generated for each case reducer function
export const {
  getSliderHome, 
  getSliderHomeSuccess,
  getCateHome, 
  getCateHomeSuccess,
  getProductHome,
  getProductHomeSuccess,
  getProductNewHome,
  getProductNewHomeSuccess,
  getProductSpecHome,
  getProductSpecHomeSuccess,
} = homeSlice.actions

export default homeSlice.reducer
