
import { call, put, takeEvery } from 'redux-saga/effects';
import CategoryService from '../services/categoryService';
import DetailService from '../services/detailService';
import UserService from '../services/userService';
import { getCategory, getCategorySuccess } from '../store/slices/categorySlice';
import { getDetail, getDetailSuccess } from '../store/slices/detailSlice';
import { getInfoUser, getInfoUserSuccess, getListOrderUser, getListOrderUserSuccess, loginUser, loginUserSuccess, updateInfoUser, updateInfoUserSuccess } from '../store/slices/userSlice';
import * as RootNavigation from '../navigation/rootNavigation';
import { showMessage } from 'react-native-flash-message';

function* getLoginUser(action) {
    // console.log(action)
    const {res, err} = yield call(() => UserService.login(action.payload.data));
    // action.payload.navigation.goBack();
    if(res?.status === 200) {
        // console.log('thanh cong')
        yield put(loginUserSuccess(res.data))
        action.payload.navigation.goBack();
        // if(action.payload.name === 'info') {

        //     RootNavigation.navigate('LoginHomeScreen');
        // }
        // else if(action.payload.name === 'order') {
        //     RootNavigation.navigate('OrderScreen');
        // }
        // else if(action.payload.name === 'confirm') {
        //     RootNavigation.navigate('ConfirmHomeScreen');
        // }
        // else if(action.payload.name === 'notify') {
        //     RootNavigation.navigate('NotifyScreen');
        // }
        // else
        // RootNavigation.navigate('HomeMainScreen');
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
                showMessage({
                    message: 'C???p nh???t th??ng tin th??nh c??ng',
                    type: 'success',
                    duration: 3000
                })
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
