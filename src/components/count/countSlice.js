import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value < 10) {
        state.value += 1;
      }
     
    },    
    dicrement: (state) => {
       if(state.value > 0){
         state.value -= 1;
       }
    }
  },
})


export const { increment,dicrement } = countSlice.actions;

export default countSlice.reducer;