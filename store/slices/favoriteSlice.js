import { createSlice } from '@reduxjs/toolkit'
import { showMessage } from 'react-native-flash-message';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState : {
    list: []
  },
  reducers: {
    toggleFavorite: (state, action) => {
      let item = state.list.findIndex(item => item === action.payload);
      if(item !== -1) {
        state.list.splice(item, 1)
        showMessage({
          message: "Đã xóa sản phẩm ra khỏi mục yêu thích",
              type: "danger",
              duration: 2000
        })
      }
      else {
        state.list = [...state.list, action.payload]
      
        showMessage({
          message: "Đã thêm sản phẩm vào mục yêu thích",
              type: "success",
              duration: 2000
        })
      }
    },
    removeAllFavorite: (state, action) => {
      state.list = [];
    }
  },
  
})

// Action creators are generated for each case reducer function
export const {toggleFavorite, removeAllFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer
