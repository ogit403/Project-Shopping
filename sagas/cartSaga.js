
import { takeEvery, call, put } from 'redux-saga/effects'; 
import CartService from '../services/cartService';
import { postOrder, postOrderSuccess } from '../store/slices/cartSlice';
import * as RootNavigation from '../navigation/rootNavigation';
function* postListCart(action) {
    const {res, err} = yield call(() => CartService.post(action.payload));
        
    console.log('res', res)

    if(res.status === 201) {
        yield put(postOrderSuccess(res.data))
   
    }
    else if(res.data.status === 0) {
        // console.log('error cart')
    }
}

export function* watchPostListCart() {
    yield takeEvery(postOrder, postListCart);
}