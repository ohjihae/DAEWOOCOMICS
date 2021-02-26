import { call, put, takeEvery,takeLatest } from 'redux-saga/effects'
import api from '../../api/actions'

function* addAction(action) {
  console.log("-- Saga: action --");
  console.log(action);

  // 1. back end와 REST API 연동
  // yield call(비동기함수명, 매개변수, 매개변수,.....)
  const result = yield call(api.post, action.payload)
  console.log("-- Saga: spi result --");
  console.log(result.data)
 
  // 2. state를 변경하는 reducer 함수를 실행
  yield put({type:"ADD_ACTION_SUCCEEDED", payload: action.payload});
}
function* fetchAction(action){
  // 1. 비동기함수 호출(api)
  console.log("-- Saga: action --");
  console.log(action);
  const result = yield call(api.list);
  console.log("-- Saga: spi result --");
  console.log(result.data)
  // 2. dispatch를 실행하는 부분
  yield put ({type:"FETCH_ACTION_SUCCEEDED", payload: result.data})
}
function* removeAction(action) {
  console.log("-- Saga: action --");
  console.log(action);

  // 1. back end와 REST API 연동
  // yield call(비동기함수명, 매개변수, 매개변수,.....)
  const result = yield call(api.delete, action.payload)
  console.log("-- Saga: spi result --");
  console.log(result.data)
 
  // 2. state를 변경하는 reducer 함수를 실행
  yield put({type:"REMOVE_ACTION_SUCCEEDED", payload: action.payload});
}


function* actionsSaga() {
  yield takeEvery("ADD_ACTION", addAction);

  yield takeLatest("FETCH_ACTION", fetchAction);

  yield takeEvery("REMOVE_ACTION", removeAction);
}

export default actionsSaga