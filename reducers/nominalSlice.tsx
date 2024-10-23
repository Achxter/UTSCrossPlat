import { createSlice } from '@reduxjs/toolkit'

export const nominalSlice = createSlice({
  name: 'nominal',
  initialState: { value: 0 },
  reducers: {
    currentNominal: (state: { value: number }, action) => {
      state.value = action.payload
    },
  },
})

export const { currentNominal } = nominalSlice.actions
export default nominalSlice.reducer