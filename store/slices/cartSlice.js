import { createSlice } from '@reduxjs/toolkit'
import { showMessage } from 'react-native-flash-message';

export const cartSlice = createSlice({
  name: 'cart',
  initialState : {
    list: [],
    loadingCart: false,
  },
  reducers: {
    addItemCart: (state, action) => {
      if(state.list.length) {
        let item = state.list.findIndex(item => item.id === action.payload.id);
        if(item === -1) {
          state.list = [...state.list, action.payload];
        }
        else state.list[item].count += 1;
      }
      else state.list = [...state.list, action.payload]

      showMessage({
        message: "Thêm vào giỏ hàng thành công",
            type: "success",
            duration: 3000
      })
    },
    removeItemCart: (state, action) => {
      let item = state.list.findIndex(item => item.id === action.payload);
      if(item !== -1) state.list.splice(item, 1);
    },
    countItemCart: (state, action) => {
      let item = state.list.findIndex(item => item.id === action.payload.id);
      if(action.payload.type === '-'){
        state.list[item].count -= state.list[item].count > 1 ?  1 : 0
      }
      else {
        state.list[item].count += 1;
      } 
    },
    postOrder: (state, action) => {
      // console.log('vao  slice')
      state.loadingCart = true;
    },
    postOrderSuccess: (state, action) => {
      state.loadingCart = false;
      showMessage({
        message: "Tạo đơn hàng thành công, vui lòng vào danh sách đơn hàng để kiểm tra",
            type: "success",
            duration: 4000
      })
    },
  },
  
})

// Action creators are generated for each case reducer function
export const {addItemCart, removeItemCart, countItemCart, postOrder, postOrderSuccess} = cartSlice.actions

export default cartSlice.reducer
