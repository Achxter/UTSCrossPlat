import { createSlice } from '@reduxjs/toolkit'

export const IDSlice = createSlice({
  name: 'ID',
  initialState: { value: '' },
  reducers: {
    currentID: (state: { value: string }, action) => {
      state.value = action.payload
    },
  },
})

export const { currentID } = IDSlice.actions
export default IDSlice.reducer