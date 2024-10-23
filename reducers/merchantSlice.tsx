import { createSlice } from '@reduxjs/toolkit'

export const merchantSlice = createSlice({
  name: 'merchant',
  initialState: { value: '' },
  reducers: {
    currentMerchant: (state: { value: string }, action) => {
      state.value = action.payload
    },
  },
})

export const { currentMerchant } = merchantSlice.actions
export default merchantSlice.reducer