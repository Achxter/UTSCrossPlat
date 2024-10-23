import { createSlice } from '@reduxjs/toolkit'

export const saldoSlice = createSlice({
  name: 'saldo',
  initialState: { value: 100000 },
  reducers: {
    pay: (state: { value: number }, action) => {
      state.value -= action.payload
    },
  },
})

export const { pay } = saldoSlice.actions
export default saldoSlice.reducer