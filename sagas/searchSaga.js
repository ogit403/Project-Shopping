
import { takeEvery, call, put } from 'redux-saga/effects'; 
import OrderService from '../services/orderService';
import SearchService from '../services/searchService';
import { searchDetail, searchDetailSuccess } from '../store/slices/orderSlice';
import { searchValue, searchValueSuccess } from '../store/slices/searchSlice';

function* getValueSearch(action) {
    // console.log('saga', action.payload)
    const {res, err} = yield call(() => SearchService.get(action.payload));

    // console.log('res', res.data)
    // console.log('err', err)

    if(res.status === 200) {
        yield put(searchValueSuccess(res.data))
    }
    else {
        console.log('error cart')
    }
}

export function* watchGetValueSearch() {
    yield takeEvery(searchValue, getValueSearch);
}