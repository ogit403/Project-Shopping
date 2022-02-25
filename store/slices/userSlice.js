import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const userSlice = createSlice({
  name: 'user',
  initialState : {
    loadingLogin: false,
    isLogin: false,
    user: {},
    token: '',
    loadingUpdate: false,
    loadingOrder: false,
    listOrder: []
  },
  reducers: {
    loginUser: (state, action) => {
      state.loadingLogin = true;
    },
    loginUserSuccess: (state, action) => {
      state.loadingLogin = false;
      // console.log(action.payload.access_token)
      AsyncStorage.setItem('token', action.payload.access_token)
      state.isLogin = true;
      state.token = action.payload.access_token
    },
    logoutUser: (state, action) => {
      AsyncStorage.removeItem('token');
      state.isLogin = false;
    },
    getInfoUser: (state, action) => {
      // console.log('da vao slice')
    },
    getInfoUserSuccess: (state, action) => {
      state.user = action.payload;
    },
    updateInfoUser: (state, action) => {
      state.loadingUpdate = true;
    },
    updateInfoUserSuccess: (state, action) => {
      state.loadingUpdate = false;
    },
    getListOrderUser: (state, action) => {
      state.loadingOrder = true;
    },
    getListOrderUserSuccess: (state, action) => {
      state.listOrder = action.payload;
      state.loadingOrder = false;
    }
  },
  
})

// Action creators are generated for each case reducer function
export const {loginUser, loginUserSuccess, logoutUser, getInfoUser, getInfoUserSuccess,
  updateInfoUser,
  updateInfoUserSuccess,
  getListOrderUser,
  getListOrderUserSuccess
} = userSlice.actions

export default userSlice.reducer
