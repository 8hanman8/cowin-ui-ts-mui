import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSageMiddleware from "redux-saga";
import rootSaga from "./../saga/rootSagas";
const sageMiddleware = createSageMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sageMiddleware))
);
sageMiddleware.run(rootSaga);
export default store;
