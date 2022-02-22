
import { takeEvery, call ,put } from 'redux-saga/effects'; 
import HomeService from '../services/homeService';
import { getCateHome, getCateHomeSuccess, getProductHome, getProductHomeSuccess, getProductNewHome, getProductNewHomeSuccess, getProductSpecHome, getProductSpecHomeSuccess, getSliderHome, getSliderHomeSuccess } from '../store/slices/homeSlice';

function* getListSliderHome() {
    const {res, err} = yield call(() => HomeService.listSlider());

    // console.log('res', res)

    if(res.status === 200) {
        yield put(getSliderHomeSuccess(res.data))
    }
    else if(res.status === 0) {
        console.log('error slider')
    }
}

function* getListCateHome() {
    const {res, err} = yield call(() => HomeService.listCate());
        
    if(res.status === 200) {
        yield put(getCateHomeSuccess(res.data))
    }
    else if(res.status === 0) {
        console.log('error slider')
    }
}

function* getListProductHome() {
    const {res, err} = yield call(() => HomeService.listProduct());
    
    // console.log('list', res);

    if(res.status === 200) {
        yield put(getProductHomeSuccess(res.data))
    }
    else if(res.status === 0) {
        console.log('error slider')
    }
}

function* getListProductNewHome() {
    const {res, err} = yield call(() => HomeService.listProductNew());
        
    if(res.status === 200) {
        yield put(getProductNewHomeSuccess(res.data))
    }
    else if(res.status === 0) {
        console.log('error slider')
    }
}

function* getListProductCateHome() {
    const {res, err} = yield call(() => HomeService.listProductSpec());
        
    if(res.status === 200) {
        yield put(getProductSpecHomeSuccess(res.data))
    }
    else if(res.status === 0) {
        console.log('error slider')
    }
}

export function* watchGetListProductCateHome() {
    yield takeEvery(getProductSpecHome, getListProductCateHome);
}

export function* watchGetListProductNewHome() {
    yield takeEvery(getProductNewHome, getListProductNewHome);
}

export function* watchGetListProductHome() {
    yield takeEvery(getProductHome, getListProductHome);
}

export function* watchGetListCateHome() {
    yield takeEvery(getCateHome, getListCateHome);
}

export function* watchGetListSliderHome() {
    yield takeEvery(getSliderHome, getListSliderHome);
}