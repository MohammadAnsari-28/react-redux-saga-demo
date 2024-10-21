import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();

export default store = configureStore({
  reducer: reducer,
  middleware: () => [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);
