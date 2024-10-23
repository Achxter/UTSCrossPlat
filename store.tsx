import { configureStore } from '@reduxjs/toolkit'
import historyReducer from './reducers/historySlice'
import IDReducer from './reducers/IDSlice'
import merchantReducer from './reducers/merchantSlice'
import nominalReducer from './reducers/nominalSlice'
import saldoReducer from './reducers/saldoSlice'

export default configureStore({
  reducer: {
    history: historyReducer,
    ID: IDReducer,
    merchant: merchantReducer,
    nominal: nominalReducer,
    saldo: saldoReducer,
  },
})