
import { call, put, takeEvery } from 'redux-saga/effects';
import CategoryService from '../services/categoryService';
import DetailService from '../services/detailService';
import { getCategory, getCategorySuccess } from '../store/slices/categorySlice';
import { getDetail, getDetailSuccess } from '../store/slices/detailSlice';

function* getListDetail(action) {
    const {res, err} = yield call(() => DetailService.item(action.payload));
    

    if(res.status === 200) {
        yield put(getDetailSuccess(res.data))
    }
    else if(res.status === 0) {
        console.log('error slider')
    }
}

export function* watchGetListDetail() {
    yield takeEvery(getDetail, getListDetail);
}
