
import { takeEvery } from 'redux-saga/effects'; 
import { showSaga } from '../store/slices/viewed';

function* increment() {
    console.log(`This is increment saga`);
}

// const {res1} = yield call(() => addressApi.getTaskAPI(action.payload));
        
// if(res1.data.status === 1) {
//     yield put(AddressActions.fetchAddressSuccess(res1.data.data))
// }
// else if(res1.data.status === 0) {
//     toast.error(res1.data.message);
// }

export function* watchIncrement() {
    yield takeEvery(showSaga, increment);
}