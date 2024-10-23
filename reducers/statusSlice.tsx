import { createSlice } from '@reduxjs/toolkit'

export const statusSlice = createSlice({
  name: 'status',
  initialState: { value: false },
  reducers: {
    currentStatus: (state: { value: boolean }, action) => {
      state.value = action.payload
    },
  },
})

export const { currentStatus } = statusSlice.actions
export default statusSlice.reducer