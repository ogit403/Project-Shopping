
import { takeEvery, call ,put } from 'redux-saga/effects'; 
import CategoryService from '../services/categoryService';
import HomeService from '../services/homeService';
import { getCategory, getCategorySuccess } from '../store/slices/categorySlice';
import { getCateHome, getCateHomeSuccess, getProductHome, getProductHomeSuccess, getProductNewHome, getProductNewHomeSuccess, getProductSpecHome, getProductSpecHomeSuccess, getSliderHome, getSliderHomeSuccess } from '../store/slices/homeSlice';

function* getListCategory(action) {
    // console.log(action);

    const {res, err} = yield call(() => CategoryService.list(action.payload));

    // console.log('res', res)
    if(res.status === 200) {
        yield put(getCategorySuccess(res.data))
    }
    else if(res.status === 0) {
        // console.log('error slider')
    }
}

export function* watchGetListCategory() {
    yield takeEvery(getCategory, getListCategory);
}
