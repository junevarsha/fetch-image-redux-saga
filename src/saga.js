 // https://redux-saga.js.org/docs/advanced/FutureActions.html

import { takeLatest, call, put, take, fork } from "redux-saga/effects";
import { delay } from 'redux-saga';
import axios from "axios";


// a watcherSaga is a saga that watches for an action 
// to be dispatched to the Store

// triggering a workerSaga.

// takeLatest is a helper function provided 
// by redux-saga that will trigger a new workerSaga

// when it sees an API_CALL_REQUEST, while cancelling
//  any previously triggered workerSaga still in process 
//  to help avoid too frequent or unnecessary API calls.

// watcher saga: watches for actions dispatched to the store, starts worker saga
// export function* watcherSaga() {
//   yield takeLatest("API_CALL_REQUEST", workerSaga);
// }


export function* watcherSaga() {
    while(true) {
      const action = yield take("API_CALL_REQUEST");
      console.log(action)
      console.log("hello")
      yield call(workerSaga);
    }
}

// fetchDog simply uses axios 
// to request a random dog image from the 
// Dog API and returns a Promise for the response.


// function that makes the api request and returns a Promise for response
function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}

// worker saga: makes the api call when 
// watcher saga sees the action

function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;

    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", dog });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}