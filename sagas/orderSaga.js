
import { takeEvery, call, put } from 'redux-saga/effects'; 
import OrderService from '../services/orderService';
import { searchDetail, searchDetailSuccess } from '../store/slices/orderSlice';

function* getInfoDetailOrder(action) {
    const {res, err} = yield call(() => OrderService.detail(action.payload));
        
    // console.log('res', res)
    // console.log('err', err)

    if(res.status === 201) {
        yield put(searchDetailSuccess(res.data))
    }
    else if(res.data.status === 0) {
        console.log('error cart')
    }
}

export function* watchGetInfoDetailOrder() {
    yield takeEvery(searchDetail, getInfoDetailOrder);
}