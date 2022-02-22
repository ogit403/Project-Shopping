import { all } from 'redux-saga/effects';
import { watchPostListCart } from './cartSaga';
import { watchGetListCategory } from './categorySaga';
import { watchGetListDetail } from './detailSaga';
import { watchGetListCateHome, watchGetListProductCateHome, watchGetListProductHome, watchGetListProductNewHome, watchGetListSliderHome } from './homeSaga';
import { watchGetInfoDetailOrder } from './orderSaga';
import { watchGetInfoUserSaga, watchGetListOrderUserSaga, watchGetLoginUser, watchUpdateInfoUserSaga } from './userSaga';

// import * as RootNavigation from './path/to/RootNavigation.js';
// RootNavigation.navigate('ChatScreen', { userName: 'Lucy' });

export default function* rootSaga() {
    yield all([
        watchGetListCateHome(),
        watchGetListProductHome(),
        watchGetListSliderHome(),
        watchGetListProductNewHome(),
        watchGetListProductCateHome(),
        watchGetListCategory(),
        watchGetListDetail(),
        watchGetLoginUser(),
        watchPostListCart(),
        watchGetInfoUserSaga(),
        watchUpdateInfoUserSaga(),
        watchGetListOrderUserSaga(),
        watchGetInfoDetailOrder(),
    ]);
}