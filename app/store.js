import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index'
import rootSaga from './sagas/index'

let store = null

export function configureStoreSingleton() {
  if (store) {
    return store
  }

  const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  // Don't include Redux DevTool integration on production builds
  const composeWithOrWithoutDevTools = (__DEV__) ?
    composeWithDevTools({ maxAge: 300 }) :
    compose
  const sagaMiddleware = createSagaMiddleware()
  const newStore = createStore(
    persistedReducer,
    composeWithOrWithoutDevTools(applyMiddleware(sagaMiddleware)),
  )

  store = newStore
  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return {
    store,
    persistor,
  }
}
