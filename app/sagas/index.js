import {
  call,
  all,
} from 'redux-saga/effects'

function* fetchData() {
  yield console.log('Fetched data!');
}

export default function* rootSaga() {
  yield all([
    call(fetchData),
  ])
}
