import { takeEvery, put } from "redux-saga/effects";

function* callAPI() {
  console.log("ab");
  let data = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
  data = yield data.json();
  const x = [];
  x[0] = yield data;

  console.log("a", data, x);
  yield put({ type: "setLis", data: x });
}

function* rootSaga() {
  yield takeEvery("list", callAPI);
}

export default rootSaga;
