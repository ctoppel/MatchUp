import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { configureStoreSingleton } from './store'

// Screens
import HomeScreen from './screens/HomeScreen'

const { store, persistor } = configureStoreSingleton()

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HomeScreen />
    </PersistGate>
  </Provider>
)

export default App
