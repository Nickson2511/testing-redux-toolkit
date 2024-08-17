// Importing the `configureStore` function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Importing the counter reducer from the counterSlice file
// The counter reducer is responsible for handling the state and actions related to the counter feature
import counterReducer from '../features/counterSlice';

// Configuring the Redux store
// The store is the centralized place where the entire application's state is managed
export const store = configureStore({
  // The `reducer` property is an object that maps slice names to their corresponding reducers
  reducer: {
    // Adding the `counter` slice to the store
    // The key `counter` will be the name under which the state managed by `counterReducer` is stored in the Redux state tree
    counter: counterReducer, // `counterReducer` is the function that will handle state updates for the `counter` slice
  },
});

// This configured `store` is exported so it can be used throughout the application
// It will be provided to the entire app using a Provider component in the main entry file (e.g., index.js)
