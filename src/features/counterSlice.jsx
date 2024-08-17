import { createSlice } from '@reduxjs/toolkit';

// Create a slice for counter with initial state, reducers, and actions
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0, // Initial state for the counter
  },
  reducers: {
    increment: (state) => {
      state.value += 1; // Action to increment the counter by 1
    },
    decrement: (state) => {
      state.value -= 1; // Action to decrement the counter by 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // Action to increment the counter by a specified amount
    },
  },
});

// Export the actions to be used in components
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer to be included in the store
export default counterSlice.reducer;
