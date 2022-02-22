
import { call, put, takeEvery } from 'redux-saga/effects';
import CategoryService from '../services/categoryService';
import DetailService from '../services/detailService';
import UserService from '../services/userService';
import { getCategory, getCategorySuccess } from '../store/slices/categorySlice';
import { getDetail, getDetailSuccess } from '../store/slices/detailSlice';
import { getInfoUser, getInfoUserSuccess, getListOrderUser, getListOrderUserSuccess, loginUser, loginUserSuccess, updateInfoUser, updateInfoUserSuccess } from '../store/slices/userSlice';
import * as RootNavigation from '../navigation/rootNavigation';

function* getLoginUser(action) {
    // console.log(action)
    const {res, err} = yield call(() => UserService.login(action.payload));
    if(res?.status === 200) {
        // console.log('thanh cong')
        yield put(loginUserSuccess(res.data))
        RootNavigation.navigate('HomeMainScreen');
    }
    else{
        console.log('error slider')
    }
}

function* getInfoUserSaga(action) {
    // console.log(action)
    const {res, err} = yield call(() => UserService.get());

    // console.log('res 1', res);
    // console.log('err 1', err)

    if(res?.status === 200) {
        yield put(getInfoUserSuccess(res.data))
    }
    else  {
        console.log('error slider')
    }
}

function* updateInfoUserSaga(action) {
    // console.log(action)
    const {res1, err} = yield call(() => UserService.change(action.payload));

    // console.log('res 1', res1.status);
    // console.log('err 1', err)

    if(res1.status === 202) {
        
        const {res, err} = yield call(() => UserService.get());

            // console.log('res 2', res.data);
            // console.log('err 1', err)

            if(res.status === 200) {
                yield put(getInfoUserSuccess(res.data))
                yield put(updateInfoUserSuccess(res1.data))
            }
            else  {
                console.log('error get')
            }
    }
    else  {
        console.log('error update')
    }
}

function* getListOrderUserSaga(action) {
    // console.log(action)
    const {res, err} = yield call(() => UserService.getOrder());
    // console.log('res 1', res);
    // console.log('err 1', err)

    if(res?.status === 200) {
        yield put(getListOrderUserSuccess(res.data))
    }
    else  {
        console.log('error slider')
    }
}

export function* watchGetListOrderUserSaga() {
    yield takeEvery(getListOrderUser, getListOrderUserSaga);
}

export function* watchUpdateInfoUserSaga() {
    yield takeEvery(updateInfoUser, updateInfoUserSaga);
}


export function* watchGetInfoUserSaga() {
    yield takeEvery(getInfoUser, getInfoUserSaga);
}

export function* watchGetLoginUser() {
    yield takeEvery(loginUser, getLoginUser);
}
