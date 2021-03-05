import 'react-native-gesture-handler';

import React from 'react';



import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import creatSagaMiddleware, { runSaga } from 'redux-saga'

import rootReducer from './redux/reducers'
import rootSaga from './redux/sagas'
import Main from './componets/MainContainer'

const SagaMiddleware = creatSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(SagaMiddleware));

SagaMiddleware.run(rootSaga);

export default function App() {
  return (
    <Provider store={store}>
      {/* useDispatch, useSelector 안됨 */}
      <Main/>
    </Provider>
  );
}
