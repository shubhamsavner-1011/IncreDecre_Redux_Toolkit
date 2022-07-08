import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../Feature/Counter/CounterSlice'
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = configureStore({
  composeWithDevTools,
  reducer: {
    counting : counterReducer,
  }
})

